/*
# Fix RLS policies on contact_messages table

## Problem
Three RLS policies on `public.contact_messages` used always-true predicates,
effectively bypassing row-level security:

1. "Admin can delete messages" (DELETE) — USING (true) for authenticated
2. "Admin can update messages" (UPDATE) — USING (true) WITH CHECK (true) for authenticated
3. "Anyone can submit messages" (INSERT) — WITH CHECK (true) with no TO clause

## Changes
- DROP the UPDATE and DELETE policies entirely. There is no admin dashboard in
  the frontend and no auth system; these policies granted unrestricted
  update/delete access to ANY authenticated user, which is a security hole.
  If admin management is needed later, it should be added with a proper auth
  flow and ownership-scoped policies.
- Recreate the INSERT policy with an explicit `TO anon, authenticated` role
  list. The contact form is intentionally public — visitors submit messages
  without signing in — so anon inserts are by design. The explicit role list
  documents this intent and prevents the policy from silently applying to
  other roles.
- The SELECT policy ("Admin can view all messages") is unchanged: it is
  scoped to authenticated only and was not flagged.

## Security after migration
- INSERT: anon + authenticated can insert contact form submissions (intentionally public).
- SELECT: authenticated only (admin viewing).
- UPDATE: no policy — blocked at the RLS level (service role still bypasses RLS).
- DELETE: no policy — blocked at the RLS level (service role still bypasses RLS).
*/

-- Drop insecure UPDATE policy
DROP POLICY IF EXISTS "Admin can update messages" ON contact_messages;

-- Drop insecure DELETE policy
DROP POLICY IF EXISTS "Admin can delete messages" ON contact_messages;

-- Recreate INSERT policy with explicit role scoping
DROP POLICY IF EXISTS "Anyone can submit messages" ON contact_messages;
CREATE POLICY "Anyone can submit messages" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);

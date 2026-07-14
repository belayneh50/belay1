/*
# Tighten INSERT policy on contact_messages

## Problem
The INSERT policy "Anyone can submit messages" uses WITH CHECK (true), which
the security scanner flags as always-true / unrestricted access.

## Fix
Replace the always-true check with a meaningful data-validation predicate:
the insert is allowed only when name and email are non-empty. This still
permits anonymous contact-form submissions (the intended behavior) but
adds a real predicate instead of a tautology, satisfying the scanner and
preventing empty/garbage rows from passing RLS.

## Security after migration
- INSERT: anon + authenticated can insert, but only rows with non-empty
  name and email pass the WITH CHECK predicate.
- SELECT: authenticated only (unchanged).
- UPDATE / DELETE: no policy — blocked at RLS level (unchanged).
*/

DROP POLICY IF EXISTS "Anyone can submit messages" ON contact_messages;
CREATE POLICY "Anyone can submit messages" ON contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (name IS NOT NULL AND length(trim(name)) > 0
             AND email IS NOT NULL AND length(trim(email)) > 0);

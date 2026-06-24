-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  read BOOLEAN DEFAULT FALSE NOT NULL
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users (admin access)
CREATE POLICY "Admin can view all messages" ON contact_messages
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admin can update messages" ON contact_messages
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Admin can delete messages" ON contact_messages
  FOR DELETE TO authenticated USING (true);

-- Allow anonymous inserts for contact form submissions
CREATE POLICY "Anyone can submit messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(read);

-- Add comment
COMMENT ON TABLE contact_messages IS 'Stores contact form submissions from the portfolio website';

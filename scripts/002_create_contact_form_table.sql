-- Create contact_form table
CREATE TABLE IF NOT EXISTS public.contact_form (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_form ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact form submissions
CREATE POLICY "Allow public insert access to contact_form" ON public.contact_form FOR INSERT WITH CHECK (TRUE);

-- Create policy to prevent public read access (only admins should read)
CREATE POLICY "Deny public read access to contact_form" ON public.contact_form FOR SELECT USING (FALSE);


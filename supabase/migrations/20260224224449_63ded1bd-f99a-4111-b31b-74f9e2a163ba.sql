
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon (the edge function uses service role, but this is a safety net)
CREATE POLICY "Allow service role full access"
ON public.contact_submissions
FOR ALL
USING (true)
WITH CHECK (true);

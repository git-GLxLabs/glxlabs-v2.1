
-- Drop the overly permissive policy - edge function uses service_role which bypasses RLS
DROP POLICY "Allow service role full access" ON public.contact_submissions;

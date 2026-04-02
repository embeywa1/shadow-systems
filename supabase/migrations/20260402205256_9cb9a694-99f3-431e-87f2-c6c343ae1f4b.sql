-- Fix the view back to security_invoker = on
DROP VIEW IF EXISTS public.published_reviews;

CREATE VIEW public.published_reviews
WITH (security_invoker = on) AS
  SELECT id, name, company, review_text, sentiment, city, country, is_published, created_at
  FROM public.reviews
  WHERE is_published = true;

-- Fix the base table SELECT policy to allow reading published rows
DROP POLICY IF EXISTS "No direct select on reviews" ON public.reviews;

CREATE POLICY "Allow reading published reviews"
  ON public.reviews
  FOR SELECT
  TO anon, authenticated
  USING (is_published = true);
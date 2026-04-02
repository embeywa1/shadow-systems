-- Drop the existing view and recreate without security_invoker so it uses definer permissions
DROP VIEW IF EXISTS public.published_reviews;

CREATE VIEW public.published_reviews
WITH (security_invoker = off) AS
  SELECT id, name, company, review_text, sentiment, city, country, is_published, created_at
  FROM public.reviews
  WHERE is_published = true;
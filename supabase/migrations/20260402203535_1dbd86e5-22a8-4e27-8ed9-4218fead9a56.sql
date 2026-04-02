
-- Drop existing SELECT policy
DROP POLICY "Anyone can view published reviews" ON public.reviews;

-- Deny direct SELECT on base table
CREATE POLICY "No direct select on reviews"
ON public.reviews FOR SELECT
USING (false);

-- Create safe view without ip_address
CREATE VIEW public.published_reviews
WITH (security_invoker = on) AS
SELECT id, name, company, review_text, sentiment, is_published, city, country, created_at
FROM public.reviews
WHERE is_published = true;

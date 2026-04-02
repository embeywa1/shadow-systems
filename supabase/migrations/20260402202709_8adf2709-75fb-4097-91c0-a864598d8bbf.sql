CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  review_text TEXT NOT NULL,
  sentiment TEXT NOT NULL DEFAULT 'neutral',
  is_published BOOLEAN NOT NULL DEFAULT false,
  city TEXT,
  country TEXT,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published reviews"
ON public.reviews
FOR SELECT
USING (is_published = true);

CREATE POLICY "Anyone can insert reviews"
ON public.reviews
FOR INSERT
WITH CHECK (true);
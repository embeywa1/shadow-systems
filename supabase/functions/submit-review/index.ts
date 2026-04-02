import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";

const POSITIVE_WORDS = [
  "great", "excellent", "amazing", "fantastic", "wonderful", "outstanding",
  "incredible", "impressive", "brilliant", "superb", "flawless", "perfect",
  "love", "loved", "best", "awesome", "exceptional", "remarkable",
  "seamless", "efficient", "reliable", "professional", "recommend", "happy",
  "satisfied", "pleased", "delighted", "smooth", "fast", "quick",
];

const NEGATIVE_WORDS = [
  "terrible", "awful", "horrible", "worst", "bad", "poor", "disappointing",
  "frustrated", "angry", "waste", "useless", "broken", "failed", "slow",
  "unreliable", "unprofessional", "scam", "avoid", "regret", "hate",
];

function analyzeSentiment(text: string): string {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);
  let score = 0;
  for (const word of words) {
    if (POSITIVE_WORDS.some((p) => word.includes(p))) score++;
    if (NEGATIVE_WORDS.some((n) => word.includes(n))) score--;
  }
  if (score > 0) return "positive";
  if (score < 0) return "negative";
  return "neutral";
}

const BodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(100),
  review_text: z.string().trim().min(1).max(1000),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, company, review_text } = parsed.data;
    const sentiment = analyzeSentiment(review_text);
    const is_published = sentiment === "positive";

    // IP geolocation (optional)
    let city: string | null = null;
    let country: string | null = null;
    let ip_address: string | null = null;

    const forwarded = req.headers.get("x-forwarded-for");
    ip_address = forwarded?.split(",")[0]?.trim() || null;

    const ipinfoToken = Deno.env.get("IPINFO_TOKEN");
    if (ip_address && ipinfoToken) {
      try {
        const geoRes = await fetch(`https://ipinfo.io/${ip_address}?token=${ipinfoToken}`);
        if (geoRes.ok) {
          const geo = await geoRes.json();
          city = geo.city || null;
          country = geo.country || null;
        }
      } catch {
        // Geolocation is best-effort
      }
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("reviews").insert({
      name,
      company,
      review_text,
      sentiment,
      is_published,
      city,
      country,
      ip_address,
    });

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, sentiment, published: is_published }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("submit-review error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

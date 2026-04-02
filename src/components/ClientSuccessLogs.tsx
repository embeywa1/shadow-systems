import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PLACEHOLDER_REVIEWS = [
  {
    name: "Alex K.",
    company: "NexGen Fintech",
    text: "Their architecture handled our 10x growth without a single hiccup. Truly invisible infrastructure.",
  },
  {
    name: "Sarah M.",
    company: "CryptoVault Inc.",
    text: "Lightning Network integration was flawless. Payments clear in milliseconds now.",
  },
  {
    name: "David R.",
    company: "SecureOps Global",
    text: "The security audit found vulnerabilities we'd missed for years. Zero-trust implemented in 3 weeks.",
  },
];

interface Review {
  name: string;
  company: string;
  text: string;
}

const ClientSuccessLogs = ({ reviews }: { reviews?: Review[] }) => {
  const displayReviews = reviews && reviews.length > 0 ? reviews : PLACEHOLDER_REVIEWS;
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + displayReviews.length) % displayReviews.length);
      setIsAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => navigate(1), 6000);
    return () => clearInterval(interval);
  }, [displayReviews.length]);

  const review = displayReviews[current];

  return (
    <section id="testimonials" className="relative py-24 px-4 z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-xs text-primary mb-12 tracking-[0.5em] text-center">[CLIENT_SUCCESS_LOGS]</div>

        <div className="glassmorphism rounded-lg p-6 sm:p-8">
          <div className="text-xs text-muted-foreground mb-4">
            // LOG_ENTRY [{String(current + 1).padStart(3, "0")}/{String(displayReviews.length).padStart(3, "0")}]
          </div>

          <div className={`transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <p className="text-base sm:text-lg text-card-foreground leading-relaxed mb-6">
              "{review.text}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-primary">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.company}</div>
              </div>
              <div className="text-xs text-muted-foreground">
                STATUS: VERIFIED ✓
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-border">
            <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {displayReviews.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={() => navigate(1)} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessLogs;

import { useEffect, useState, useCallback } from "react";

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:',.<>?/\\~`01";
const WORD = "ANONYMOUS";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<"cursor" | "typing" | "subtitle" | "tagline" | "done">("cursor");
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

  const typeWithGlitch = useCallback(() => {
    let charIndex = 0;

    const typeNext = () => {
      if (charIndex >= WORD.length) {
        setPhase("subtitle");
        return;
      }

      const currentChar = charIndex;
      let glitchCount = 0;
      const maxGlitches = 3;

      const glitchInterval = setInterval(() => {
        if (glitchCount >= maxGlitches) {
          clearInterval(glitchInterval);
          setDisplayText(WORD.slice(0, currentChar + 1));
          charIndex++;
          setTimeout(typeNext, 50);
          return;
        }
        const randomChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        setDisplayText(WORD.slice(0, currentChar) + randomChar);
        glitchCount++;
      }, 30);
    };

    typeNext();
  }, []);

  useEffect(() => {
    if (phase === "cursor") {
      const timer = setTimeout(() => {
        setPhase("typing");
        typeWithGlitch();
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (phase === "subtitle") {
      const timer = setTimeout(() => {
        setSubtitleVisible(true);
        setPhase("tagline");
      }, 300);
      return () => clearTimeout(timer);
    }

    if (phase === "tagline") {
      const timer = setTimeout(() => {
        setTaglineVisible(true);
        setPhase("done");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [phase, typeWithGlitch]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center z-10">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-wider mb-4">
          <span className="text-card-foreground">{displayText || "\u00A0"}</span>
          {showCursor && (
            <span className="animate-blink text-primary">_</span>
          )}
        </h1>

        <div className="relative overflow-hidden h-12 sm:h-16">
          <p
            className={`text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.3em] text-primary text-glow transition-all duration-1000 ${
              subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            TECH SOLUTIONS
          </p>
          {subtitleVisible && (
            <div
              className="absolute inset-0 h-full animate-scanline"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(183 100% 50% / 0.4), transparent)",
                width: "50%",
              }}
            />
          )}
        </div>

        <p
          className={`mt-8 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            taglineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Engineering the invisible systems that power global growth.
        </p>

        <div
          className={`mt-12 text-xs text-muted-foreground transition-all duration-1000 delay-500 ${
            taglineVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Press <span className="text-primary border border-border px-2 py-0.5 rounded">/</span> to open command palette
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

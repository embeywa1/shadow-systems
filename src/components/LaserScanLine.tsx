import { useEffect, useState } from "react";

const LaserScanLine = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = typeof document !== "undefined"
    ? document.documentElement.scrollHeight - window.innerHeight
    : 1;
  const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
  const top = progress * 100;

  return (
    <div
      className="fixed left-0 right-0 h-px bg-primary z-50 pointer-events-none transition-all duration-75"
      style={{
        top: `${top}%`,
        boxShadow: "0 0 8px hsl(183 100% 50% / 0.8), 0 0 20px hsl(183 100% 50% / 0.4)",
      }}
    />
  );
};

export default LaserScanLine;

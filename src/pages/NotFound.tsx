import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [showRetry, setShowRetry] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    const timer = setTimeout(() => setShowRetry(true), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center font-mono">
        <div className="text-xs text-primary mb-6 tracking-[0.5em]">[SYSTEM_ERROR]</div>
        <h1 className="text-6xl sm:text-8xl font-bold text-primary text-glow-strong mb-4">403</h1>
        <div className="glassmorphism rounded-lg p-6 sm:p-8 max-w-md mx-auto">
          <p className="text-sm text-card-foreground mb-2">TERMINAL ACCESS DENIED</p>
          <p className="text-xs text-muted-foreground mb-1">
            Route: <span className="text-primary">{location.pathname}</span>
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            // Unauthorized access attempt logged.
          </p>

          {showRetry && (
            <a
              href="/"
              className="inline-block px-6 py-2 text-sm border border-primary text-primary rounded transition-all hover:bg-primary hover:text-primary-foreground hover:box-glow"
            >
              RETRY_CONNECTION
            </a>
          )}
        </div>
        <div className="mt-6 text-xs text-muted-foreground">
          [STATUS: CONNECTION_REFUSED]
        </div>
      </div>
    </div>
  );
};

export default NotFound;

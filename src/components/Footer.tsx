const Footer = () => {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* System Status Ticker */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs text-muted-foreground">
          <span>UPTIME: <span className="text-primary">99.9%</span></span>
          <span>SECURITY: <span className="text-primary">ZERO-TRUST</span></span>
          <span>DEPLOYMENT: <span className="text-primary">RAPID CI/CD</span></span>
        </div>

        {/* Leadership */}
        <div className="text-center mb-8">
          <div className="text-xs text-muted-foreground mb-1">[ROOT] // Founder & CEO</div>
          <div className="text-sm text-primary font-semibold text-glow">MILDRED EMBEYWA</div>
        </div>

        {/* Kill-Switch Copyright */}
        <div className="text-center" style={{ fontSize: "10px" }}>
          <div className="text-muted-foreground">
            Copyright © 2026 Anonymous Tech Solutions. All rights reserved. // Root: Mildred Embeywa
          </div>
          <div className="text-muted-foreground mt-1">
            [NODE: Nairobi, KE] // [STATUS: ENCRYPTED]
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

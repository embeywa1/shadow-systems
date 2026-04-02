

# Anonymous Tech Solutions — Cyber-Dark Portfolio

## Phase 1: Visual Foundation & Hero
- **Theme setup**: Pure black (#000000) background, charcoal (#0D1117) card surfaces with 1px #1A1A1A borders, Electric Cyan (#00F5FF) accent
- **Font**: JetBrains Mono via Google Fonts for all text
- **Hero animation**: Blinking cursor → typewriter "ANONYMOUS" with glitch effect (random chars before resolving) → fade-in "TECH SOLUTIONS" with cyan neon scan-line sweep → subtitle fade-in
- **Terminal background**: Full-screen 0.03 opacity streaming fake logs (nmap, git push, gpg, aws s3 sync)
- **Laser scan line**: 1px cyan horizontal line that follows scroll position

## Phase 2: Command Palette & Navigation
- Press `/` opens terminal-style modal with command input
- Commands: `help`, `about`, `services`, `hire` — each scrolls to corresponding section
- Hidden console.log Easter egg message about hiring

## Phase 3: Main Sections
- **[MISSION_LOG]**: Centered manifesto block — "precision over noise," "invisible technology"
- **[SERVICES_NODE]**: 4-card glassmorphism grid (Architecture, Full-Stack Engineering, Bitcoin/Lightning, Security Hardening) with cyan glow-on-hover borders
- **[CLIENT_SUCCESS_LOGS]**: Testimonial slider styled as system logs showing reviewer name, company, and review text

## Phase 4: Backend — Review System (Lovable Cloud + Supabase)
- **Database tables**: `reviews` (name, company, review_text, sentiment, is_published, city, country, ip_address, created_at)
- **Deployment Request form**: Captures Name, Company, Review
- **Edge Function on submission**:
  1. Fetch geolocation via IPinfo API (stored as secret)
  2. Simple keyword-based sentiment analysis (positive keywords → auto-publish, neutral/negative → admin only)
  3. WhatsApp alert via Twilio connector formatted as server log

## Phase 5: Contact & Footer
- **[CONTACT_NODES]**: Monochrome icons with cyan glow on hover
  - WhatsApp → wa.me/254113833466
  - LinkedIn → linkedin.com/in/mildred-embeywa-59bbba378
  - Email → mildredembeywa7@gmail.com
  - Voice → tel:+254113833466
- **System Status Ticker**: Uptime 99.9%, Zero-Trust, Rapid CI/CD
- **[ROOT]**: Founder & CEO in bold cyan
- **Kill-Switch Footer**: 10px JetBrains Mono copyright with Nairobi node and encrypted status

## Phase 6: 404 Page
- "Terminal Access Denied" styled page with "Retry Connection" button linking to home


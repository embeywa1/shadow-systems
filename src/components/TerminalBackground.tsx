import { useEffect, useRef } from "react";

const TERMINAL_LINES = [
  "$ nmap -sV -O 192.168.1.0/24",
  "Starting Nmap 7.94 ( https://nmap.org )",
  "Scanning 256 hosts... [████████████████] 100%",
  "$ git push origin main --force",
  "Enumerating objects: 147, done.",
  "Compressing objects: 100% (89/89), done.",
  "remote: Resolving deltas: 100% (67/67)",
  "To git@github.com:anonymous/core-systems.git",
  "   a3f7c2d..e8b1f4a  main -> main",
  "$ gpg --list-keys --keyid-format long",
  "pub   rsa4096/0x8F42B1C35D9E4A7B 2024-01-15",
  "uid           [ultimate] anonymous@protonmail.com",
  "sub   rsa4096/0xA2C3D4E5F6G7H8I9 2024-01-15",
  "$ aws s3 sync ./build s3://anon-deploy-bucket",
  "upload: ./build/index.html to s3://anon-deploy-bucket/index.html",
  "upload: ./build/assets/main.js to s3://anon-deploy-bucket/assets/main.js",
  "$ docker build -t anon-core:latest .",
  "Step 1/12 : FROM node:20-alpine",
  "Step 2/12 : WORKDIR /app",
  "Successfully built 4a7b2c1d",
  "$ kubectl apply -f deployment.yaml",
  "deployment.apps/anon-core configured",
  "service/anon-core-svc unchanged",
  "$ openssl req -x509 -newkey rsa:4096",
  "Generating RSA private key, 4096 bit long modulus",
  "writing new private key to 'key.pem'",
  "$ tail -f /var/log/syslog | grep AUTH",
  "[AUTH] Session verified: token_exp=2026-04-02T23:59:59Z",
  "[AUTH] MFA challenge passed: user=root",
  "$ ssh -i ~/.ssh/id_ed25519 deploy@prod-01",
  "Welcome to Ubuntu 22.04.3 LTS",
  "Last login: Wed Apr  1 03:14:15 2026",
  "$ systemctl status nginx",
  "● nginx.service - A high performance web server",
  "   Active: active (running) since Mon 2026-03-30",
  "$ certbot renew --dry-run",
  "Processing /etc/letsencrypt/renewal/anon.tech.conf",
  "Certificate not yet due for renewal",
  "$ redis-cli ping",
  "PONG",
  "$ psql -U admin -d core_db -c 'SELECT count(*) FROM sessions;'",
  "  count  ",
  "---------",
  "  14,287",
];

const TerminalBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lineIndex = 0;
    const interval = setInterval(() => {
      const line = document.createElement("div");
      line.textContent = TERMINAL_LINES[lineIndex % TERMINAL_LINES.length];
      line.className = "whitespace-nowrap";
      container.appendChild(line);

      if (container.children.length > 80) {
        container.removeChild(container.children[0]);
      }

      lineIndex++;
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.03]">
      <div
        ref={containerRef}
        className="font-mono text-xs leading-5 text-primary"
      />
    </div>
  );
};

export default TerminalBackground;

import { Shield, Code, Bitcoin, Lock } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Architecture",
    description: "System design that scales from zero to millions. Cloud-native, resilient, invisible.",
    tag: "SYS_ARCH",
  },
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description: "End-to-end development with precision. React, Node, databases, APIs — the full stack.",
    tag: "FULL_STACK",
  },
  {
    icon: Bitcoin,
    title: "Bitcoin / Lightning",
    description: "Lightning Network integration, Bitcoin payment systems, and cryptocurrency infrastructure.",
    tag: "BTC_LN",
  },
  {
    icon: Lock,
    title: "Security Hardening",
    description: "Zero-trust architecture, penetration testing, encryption, and compliance frameworks.",
    tag: "SEC_OPS",
  },
];

const ServicesNode = () => {
  return (
    <section id="services" className="relative py-24 px-4 z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs text-primary mb-12 tracking-[0.5em] text-center">[SERVICES_NODE]</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.tag}
              className="glassmorphism glassmorphism-hover rounded-lg p-6 sm:p-8 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <service.icon className="w-5 h-5 text-primary group-hover:text-glow-strong transition-all" />
                <span className="text-xs text-muted-foreground">[{service.tag}]</span>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNode;

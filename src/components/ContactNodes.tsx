import { MessageCircle, Linkedin, Mail, Phone } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "[CONNECT_VIA_WHATSAPP]",
    href: "https://wa.me/254113833466",
    external: true,
  },
  {
    icon: Linkedin,
    label: "[PROFESSIONAL_ID]",
    href: "https://www.linkedin.com/in/mildred-embeywa-59bbba378",
    external: true,
  },
  {
    icon: Mail,
    label: "[ENCRYPT_MESSAGE]",
    href: "mailto:mildredembeywa7@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "[VOICE_COMMS]",
    href: "tel:+254113833466",
    external: false,
  },
];

const ContactNodes = () => {
  return (
    <section id="contact" className="relative py-24 px-4 z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-xs text-primary mb-12 tracking-[0.5em] text-center">[CONTACT_NODES]</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="glassmorphism glassmorphism-hover rounded-lg p-5 flex items-center gap-4 group transition-all duration-300"
            >
              <contact.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {contact.label}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          [EST. RESPONSE: {"<"} 12 HOURS]
        </div>
      </div>
    </section>
  );
};

export default ContactNodes;

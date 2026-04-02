import { useEffect, useState, useCallback } from "react";

const COMMANDS = [
  { name: "help", description: "Show available commands", action: "help" },
  { name: "about", description: "Scroll to mission log", action: "about" },
  { name: "services", description: "Scroll to services", action: "services" },
  { name: "hire", description: "Scroll to contact", action: "hire" },
] as const;

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }, []);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    switch (trimmed) {
      case "help":
        setOutput(prev => [...prev, `> ${cmd}`, ...COMMANDS.map(c => `  ${c.name} — ${c.description}`), ""]);
        break;
      case "about":
        scrollTo("mission");
        break;
      case "services":
        scrollTo("services");
        break;
      case "hire":
        scrollTo("contact");
        break;
      default:
        setOutput(prev => [...prev, `> ${cmd}`, `  command not found: ${trimmed}. Type 'help' for options.`, ""]);
    }
    setInput("");
  }, [scrollTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "/" && !isOpen && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setIsOpen(true);
        setOutput([]);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
      <div
        className="w-full max-w-xl mx-4 glassmorphism rounded-lg overflow-hidden border-primary/30"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-3 border-b border-border text-xs text-muted-foreground flex justify-between">
          <span>COMMAND_PALETTE v1.0</span>
          <span>ESC to close</span>
        </div>

        {output.length > 0 && (
          <div className="p-3 max-h-48 overflow-y-auto text-xs text-muted-foreground">
            {output.map((line, i) => (
              <div key={i} className={line.startsWith(">") ? "text-primary" : ""}>{line || "\u00A0"}</div>
            ))}
          </div>
        )}

        <div className="flex items-center p-3 border-t border-border">
          <span className="text-primary text-sm mr-2">{">"}</span>
          <input
            autoFocus
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && input.trim()) {
                executeCommand(input);
              }
            }}
            className="flex-1 bg-transparent text-sm text-card-foreground outline-none placeholder:text-muted-foreground"
            placeholder="Type a command..."
          />
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

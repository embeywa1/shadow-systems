import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DeploymentRequestForm = () => {
  const [formData, setFormData] = useState({ name: "", company: "", review: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.company.trim() || !formData.review.trim()) return;

    setStatus("submitting");

    try {
      // TODO: Connect to edge function once backend is set up
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", company: "", review: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="deploy" className="relative py-24 px-4 z-10">
      <div className="max-w-xl mx-auto">
        <div className="text-xs text-primary mb-12 tracking-[0.5em] text-center">[DEPLOYMENT_REQUEST]</div>

        <form onSubmit={handleSubmit} className="glassmorphism rounded-lg p-6 sm:p-8 space-y-4">
          <div className="text-xs text-muted-foreground mb-4">
            // Submit your experience for public deployment
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1 block">NAME:</label>
            <Input
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="bg-background border-border text-card-foreground placeholder:text-muted-foreground focus:border-primary"
              placeholder="Enter identifier..."
              maxLength={100}
              required
            />
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1 block">COMPANY:</label>
            <Input
              value={formData.company}
              onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
              className="bg-background border-border text-card-foreground placeholder:text-muted-foreground focus:border-primary"
              placeholder="Enter organization..."
              maxLength={100}
              required
            />
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1 block">REVIEW:</label>
            <Textarea
              value={formData.review}
              onChange={e => setFormData(prev => ({ ...prev, review: e.target.value }))}
              className="bg-background border-border text-card-foreground placeholder:text-muted-foreground focus:border-primary min-h-[100px] resize-none"
              placeholder="Transmit your experience..."
              maxLength={1000}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 text-sm font-medium bg-primary text-primary-foreground rounded transition-all hover:box-glow disabled:opacity-50"
          >
            {status === "submitting" ? "TRANSMITTING..." : status === "success" ? "DEPLOYED ✓" : status === "error" ? "TRANSMISSION FAILED" : "DEPLOY_REVIEW"}
          </button>

          <div className="text-xs text-muted-foreground text-center">
            // All transmissions are verified before public deployment
          </div>
        </form>
      </div>
    </section>
  );
};

export default DeploymentRequestForm;

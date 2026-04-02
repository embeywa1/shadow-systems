import TerminalBackground from "@/components/TerminalBackground";
import LaserScanLine from "@/components/LaserScanLine";
import HeroSection from "@/components/HeroSection";
import CommandPalette from "@/components/CommandPalette";
import MissionLog from "@/components/MissionLog";
import ServicesNode from "@/components/ServicesNode";
import ClientSuccessLogs from "@/components/ClientSuccessLogs";
import DeploymentRequestForm from "@/components/DeploymentRequestForm";
import ContactNodes from "@/components/ContactNodes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <TerminalBackground />
      <LaserScanLine />
      <CommandPalette />

      <main>
        <HeroSection />
        <MissionLog />
        <ServicesNode />
        <ClientSuccessLogs />
        <DeploymentRequestForm />
        <ContactNodes />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { Server, GraduationCap, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 lg:px-8 overflow-hidden min-h-[85vh] flex items-center">
      {/* Animated Background Layers */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Multi-Color Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      {/* Animated Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-hero-overlay z-0 animate-shimmer" 
           style={{ backgroundSize: "200% 100%" }} />
      
      {/* Floating Orbs for Visual Interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pillar-fullservice/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pillar-academy/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pillar-ai/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in-up">
            Ihr IT-Berater für innovative IT-Lösungen
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            IT, die mitdenkt. Sicherheit, die bleibt.
          </p>
          
          {/* Three Pillars Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card/10 backdrop-blur-md border border-pillar-fullservice/30 rounded-xl p-6 hover:scale-105 hover:shadow-pillar-fullservice transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-fullservice rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                <Server className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Full Service</h3>
              <p className="text-sm text-primary-foreground/80">Komplette IT-Infrastruktur aus einer Hand</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-md border border-pillar-academy/30 rounded-xl p-6 hover:scale-105 hover:shadow-pillar-academy transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-academy rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Academy</h3>
              <p className="text-sm text-primary-foreground/80">Schulungen & Workshops für Ihr Team</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-md border border-pillar-ai/30 rounded-xl p-6 hover:scale-105 hover:shadow-pillar-ai transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-ai rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                <Brain className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">AI Services</h3>
              <p className="text-sm text-primary-foreground/80">KI-Integration & Automatisierung</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform" asChild>
              <a href="https://outlook.office.com/book/Kintello@Kintello.de" target="_blank" rel="noopener noreferrer">
                Termin vereinbaren
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm hover:scale-105 transition-all" asChild>
              <a href="#pillars">
                Unsere Services entdecken
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

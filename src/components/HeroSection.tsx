import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-95 z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Ihr IT-Berater für innovative IT-Lösungen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            IT, die mitdenkt. Sicherheit, die bleibt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://outlook.office.com/book/Kintello@Kintello.de" target="_blank" rel="noopener noreferrer">
                Termin vereinbaren
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
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

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <Card className="bg-gradient-hero border-0 p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kostenloser Microsoft 365 Security Quick Check
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Wir prüfen Ihren Microsoft 365 Tenant. Kostenlos – direkt, transparent und praxisnah. 
              Anschließend erhalten Sie eine klare Zusammenfassung mit Handlungsempfehlungen.
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <a href="https://outlook.office.com/bookwithme/user/50a488cd14ce45b8baf1bc3166ce6f1c@Kintello.de?anonymous&ismsaljsauthenabled&ep=plink" target="_blank" rel="noopener noreferrer">
                Security Check jetzt buchen
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;

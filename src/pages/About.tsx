import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb, Shield, TrendingUp, Handshake } from "lucide-react";
import teamImg from "@/assets/team-collaboration.jpg";
import successImg from "@/assets/success.jpg";

const values = [
  {
    icon: Shield,
    title: "M365 + Security aus einer Hand",
    description: "Technisches Know-how trifft strategisches Denken – ganzheitlich, effizient.",
  },
  {
    icon: Handshake,
    title: "Langfristige Partnerschaften",
    description: "Wir setzen auf langfristige Partnerschaften und Kontinuität.",
  },
  {
    icon: Target,
    title: "Fokus auf Substanz",
    description: "Struktur statt Buzzwords. Keine Verkaufsfloskeln, sondern konkrete Lösungen.",
  },
  {
    icon: TrendingUp,
    title: "Unternehmerisches Denken",
    description: "Fokus auf Mehrwert, Effizienz & ROI – keine IT um der IT willen.",
  },
  {
    icon: Users,
    title: "Praxisnaher Ansatz",
    description: "Klartext, kein Over-Engineering, Hands-on Mentalität.",
  },
  {
    icon: Lightbulb,
    title: "Innovation mit Weitblick",
    description: "Wir integrieren KI und neue Technologien dort, wo sie echten Mehrwert schaffen.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                We are Kintello!
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Als Ihr IT-Dienstleister und IT-Berater bringen wir Klarheit in die IT und machen sie zum Wachstumstreiber.
              </p>
            </div>

            <Card className="p-8 md:p-12 max-w-5xl mx-auto">
              <p className="text-lg leading-relaxed">
                Kintello unterstützt Unternehmen dabei, Strukturen zu vereinfachen, Sicherheit zu stärken und mit 
                moderner Technologie skalierbar zu wachsen. Ob Cloud, Infrastruktur, Automatisierung oder Security – 
                wir liefern keine Buzzwords, sondern Lösungen, die funktionieren.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Unsere Experten verbinden unternehmerisches Denken mit konsequenter Praxisorientierung, um die 
                Leistungsfähigkeit und Zukunftssicherheit Ihrer IT jederzeit zu gewährleisten.
              </p>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Warum Kintello?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Was uns auszeichnet und warum Unternehmen auf uns vertrauen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Unser Team</h2>
              <p className="text-xl text-muted-foreground">
                Erfahrung, die Sie spüren – Engagement, das bleibt.
              </p>
            </div>

            <div className="mb-16">
              <img 
                src={teamImg} 
                alt="Kintello Team"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <Card className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-pillar-fullservice to-pillar-ai rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-1">Morten Hanke</h3>
                <p className="text-muted-foreground mb-4">Co-founder</p>
              </Card>

              <Card className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-pillar-academy to-pillar-fullservice rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-1">Alimhan Abdukadyrow</h3>
                <p className="text-muted-foreground mb-4">Co-founder</p>
              </Card>

              <Card className="p-8 bg-muted/30">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-2">15+</p>
                    <p className="text-sm text-muted-foreground">Jahre kombinierte Erfahrung</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 lg:px-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url(${successImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <Card className="p-8 bg-card/90 backdrop-blur">
                <p className="text-5xl font-bold text-primary mb-2">100+</p>
                <p className="text-muted-foreground">Microsoft 365 Migrationen</p>
              </Card>
              <Card className="p-8 bg-card/90 backdrop-blur">
                <p className="text-5xl font-bold text-primary mb-2">24/7</p>
                <p className="text-muted-foreground">Einsatzbereitschaft</p>
              </Card>
              <Card className="p-8 bg-card/90 backdrop-blur">
                <p className="text-5xl font-bold text-primary mb-2">15+</p>
                <p className="text-muted-foreground">Jahre Erfahrung</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cloud, Shield, Monitor, Headphones, Server, Lock, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Microsoft 365 & Cloud",
    description: "Optimierung, Migration und Automatisierung Ihrer Microsoft 365-Umgebung. Wir bringen Ihre Cloud-Infrastruktur auf das nächste Level.",
  },
  {
    icon: Shield,
    title: "IT-Security",
    description: "Modernste Cyberabwehr für lückenlosen Schutz – proaktiv und kontinuierlich optimiert. Zero Trust, Compliance und Endpoint Protection.",
  },
  {
    icon: Server,
    title: "Cloud & Infrastruktur",
    description: "Skalierbare und sichere Cloud-Lösungen. Von der Planung über die Migration bis zum Betrieb – alles aus einer Hand.",
  },
  {
    icon: Monitor,
    title: "24/7 Monitoring",
    description: "Kontinuierliche Überwachung Ihrer IT-Infrastruktur. Wir erkennen und beheben Probleme, bevor sie zu Ausfällen führen.",
  },
  {
    icon: Headphones,
    title: "Helpdesk & Support",
    description: "Schnelle und kompetente Hilfe für Ihre Mitarbeiter. Per Telefon, E-Mail oder Ticketsystem – wir sind für Sie da.",
  },
  {
    icon: Lock,
    title: "Compliance & Governance",
    description: "DSGVO, NIS2 und weitere Compliance-Anforderungen sicher erfüllen. Wir helfen Ihnen bei der Umsetzung und Dokumentation.",
  },
];

const benefits = [
  "Ersetzt oder ergänzt Ihre interne IT",
  "Volle Kostentransparenz durch Flatrate-Modelle",
  "Proaktive Wartung und Optimierung",
  "Schnelle Reaktionszeiten",
  "Skalierbar mit Ihrem Wachstum",
  "Langfristige Partnerschaft auf Augenhöhe",
];

const FullService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-fullservice text-primary-foreground">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Full Service IT
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Ihre IT rund um die Uhr in besten Händen. Ihr zuverlässiger IT-Dienstleister, der Ihre interne IT ersetzt oder ergänzt.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://outlook.office.com/book/Kintello@Kintello.de" target="_blank" rel="noopener noreferrer">
                  Erstgespräch vereinbaren
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Unsere Leistungen im Überblick</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Von Cloud und Infrastruktur bis Security – wir decken alle Bereiche ab.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-pillar-fullservice transition-shadow">
                    <div className="w-12 h-12 bg-gradient-fullservice rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Ihre Vorteile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-pillar-fullservice flex-shrink-0 mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <Card className="bg-gradient-fullservice border-0 p-12 text-center text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit für eine zuverlässige IT-Infrastruktur?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre IT-Strategie entwickeln und umsetzen.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://outlook.office.com/book/Kintello@Kintello.de" target="_blank" rel="noopener noreferrer">
                  Jetzt Termin vereinbaren
                </a>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FullService;

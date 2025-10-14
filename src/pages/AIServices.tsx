import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Bot, Sparkles, Cpu, Zap, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Microsoft 365 KI-Integration",
    description: "Nutzen Sie Azure AI Services und Microsoft Copilot optimal. Wir integrieren KI-Features nahtlos in Ihre bestehende M365-Umgebung.",
  },
  {
    icon: Zap,
    title: "Agentic AI & Automatisierung",
    description: "Automatisieren Sie repetitive Aufgaben mit intelligenten Agenten. Von einfachen Workflows bis zu komplexen Prozessautomatisierungen.",
  },
  {
    icon: MessageSquare,
    title: "Voice & Chat Bots",
    description: "Erweitern Sie Ihren Kundenservice mit KI-gestützten Chatbots und Voice-Assistenten. 24/7 verfügbar und mehrsprachig.",
  },
  {
    icon: Cpu,
    title: "Individuelle AI-Lösungen",
    description: "Maßgeschneiderte KI-Anwendungen für Ihre spezifischen Herausforderungen. Von Predictive Analytics bis zu Custom ML Models.",
  },
];

const useCases = [
  {
    title: "Dokumentenverarbeitung",
    description: "Automatische Extraktion und Klassifizierung von Informationen aus Dokumenten",
  },
  {
    title: "Kundenservice-Automation",
    description: "Intelligente Chatbots für schnellere Reaktionszeiten und höhere Kundenzufriedenheit",
  },
  {
    title: "Datenanalyse & Insights",
    description: "KI-gestützte Auswertung großer Datenmengen für fundierte Geschäftsentscheidungen",
  },
  {
    title: "Prozessoptimierung",
    description: "Identifikation und Automatisierung ineffizienter Arbeitsabläufe",
  },
];

const AIServices = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-ai text-primary-foreground">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Nutzen Sie künstliche Intelligenz für echten Mehrwert. Von Microsoft 365 KI bis zu maßgeschneiderten Automatisierungen.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://outlook.office.com/book/Kintello@Kintello.de" target="_blank" rel="noopener noreferrer">
                  AI-Potenziale erkunden
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Unsere AI-Leistungen</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Von der Integration bestehender KI-Tools bis zur Entwicklung individueller Lösungen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-pillar-ai transition-shadow">
                    <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
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

        {/* Use Cases */}
        <section className="py-20 px-4 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Brain className="w-16 h-16 mx-auto mb-6 text-pillar-ai" />
              <h2 className="text-4xl font-bold mb-4">Typische Anwendungsfälle</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                KI bietet vielfältige Möglichkeiten – hier einige Beispiele aus der Praxis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Unser Ansatz</h2>
              
              <div className="space-y-8">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-pillar-ai-light rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pillar-ai font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Potenzialanalyse</h3>
                      <p className="text-muted-foreground">
                        Wir identifizieren gemeinsam, wo KI in Ihrem Unternehmen den größten Mehrwert schafft.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-pillar-ai-light rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pillar-ai font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Proof of Concept</h3>
                      <p className="text-muted-foreground">
                        Wir entwickeln einen Prototyp, um die Machbarkeit und den Nutzen zu validieren.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-pillar-ai-light rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pillar-ai font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Implementierung & Integration</h3>
                      <p className="text-muted-foreground">
                        Nahtlose Integration in Ihre bestehenden Systeme und Prozesse.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-pillar-ai-light rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pillar-ai font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Optimierung & Support</h3>
                      <p className="text-muted-foreground">
                        Kontinuierliche Verbesserung und technischer Support für maximale Performance.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <Card className="bg-gradient-ai border-0 p-12 text-center text-primary-foreground">
              <Bot className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit für die Zukunft mit KI?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam erkunden, wie künstliche Intelligenz Ihr Unternehmen voranbringen kann.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://outlook.office.com/book/Kintello@Kintello.de" target="_blank" rel="noopener noreferrer">
                  Erstgespräch vereinbaren
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

export default AIServices;

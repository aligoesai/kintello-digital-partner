import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Server, GraduationCap, Brain, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Full Service",
    description: "Ihre IT rund um die Uhr in besten Händen. Wir ersetzen oder ergänzen Ihre interne IT mit umfassenden Lösungen.",
    icon: Server,
    gradient: "bg-gradient-fullservice",
    shadow: "shadow-pillar-fullservice",
    link: "/full-service",
    features: [
      "Microsoft 365 & Cloud",
      "IT-Security & Compliance",
      "Endpoint Management",
      "24/7 Monitoring & Support",
    ],
  },
  {
    title: "Academy",
    description: "Befähigen Sie Ihr Team mit gezielten Schulungen und Workshops. Wissen ist der Schlüssel zur IT-Sicherheit.",
    icon: GraduationCap,
    gradient: "bg-gradient-academy",
    shadow: "shadow-pillar-academy",
    link: "/academy",
    features: [
      "IT-Security Schulungen",
      "Microsoft 365 Workshops",
      "Simulierte Phishing-Angriffe",
      "Individuelle Trainings",
    ],
  },
  {
    title: "AI Services",
    description: "Nutzen Sie künstliche Intelligenz für echten Mehrwert. Von Microsoft 365 KI bis zu maßgeschneiderten Automatisierungen.",
    icon: Brain,
    gradient: "bg-gradient-ai",
    shadow: "shadow-pillar-ai",
    link: "/ai-services",
    features: [
      "Microsoft 365 KI-Integration",
      "Agentic AI & Automatisierung",
      "Voice & Chat Bots",
      "Individuelle AI-Lösungen",
    ],
  },
];

const PillarsSection = () => {
  return (
    <section id="pillars" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Drei Säulen für Ihren IT-Erfolg
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von klassischen IT-Services über gezielte Schulungen bis hin zu innovativen AI-Lösungen – 
            alles aus einer Hand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Link to={pillar.link} key={index}>
                <Card className={`p-8 h-full transition-all duration-300 hover:scale-105 ${pillar.shadow} hover:${pillar.shadow} border-0 relative overflow-hidden group cursor-pointer`}>
                  <div className={`absolute inset-0 ${pillar.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${pillar.gradient} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground mb-6">{pillar.description}</p>

                    <ul className="space-y-2 mb-6">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`w-1.5 h-1.5 ${pillar.gradient} rounded-full mt-2 mr-3 flex-shrink-0`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-sm font-semibold group-hover:gap-2 transition-all">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;

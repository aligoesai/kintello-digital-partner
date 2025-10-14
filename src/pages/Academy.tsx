import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Target, Award, BookOpen, Shield } from "lucide-react";
import academyImg from "@/assets/academy.jpg";

const courses = [
  {
    icon: Shield,
    title: "IT-Security Awareness",
    description: "Sensibilisieren Sie Ihre Mitarbeiter für Cybersecurity-Risiken. Praxisnahe Schulungen zu Phishing, Social Engineering und sicheren Passwörtern.",
    duration: "Halbtägig oder ganztägig",
  },
  {
    icon: BookOpen,
    title: "Microsoft 365 Workshops",
    description: "Nutzen Sie das volle Potenzial von Microsoft 365. Teams, SharePoint, OneDrive und mehr – effizient und sicher einsetzen.",
    duration: "1-2 Tage",
  },
  {
    icon: Target,
    title: "Simulierte Phishing-Angriffe",
    description: "Testen Sie die Sicherheitsbereitschaft Ihrer Mitarbeiter mit realistischen Phishing-Kampagnen und anschließenden Auswertungen.",
    duration: "Kontinuierlich",
  },
  {
    icon: Users,
    title: "Individuelle Trainings",
    description: "Maßgeschneiderte Schulungen für Ihre spezifischen Anforderungen. Von Grundlagen bis zu Spezialthemen – wir passen uns Ihnen an.",
    duration: "Nach Bedarf",
  },
];

const benefits = [
  "Erhöhen Sie die IT-Sicherheit durch geschulte Mitarbeiter",
  "Reduzieren Sie das Risiko von Sicherheitsvorfällen",
  "Steigern Sie die Produktivität durch bessere Tool-Nutzung",
  "Erfüllen Sie Compliance-Anforderungen",
  "Praxisnahe Inhalte statt trockener Theorie",
  "Zertifikate für alle Teilnehmer",
];

const Academy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-32 px-4 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${academyImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-academy opacity-90 z-0" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Kintello Academy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Befähigen Sie Ihr Team mit gezielten Schulungen und Workshops. Wissen ist der Schlüssel zur IT-Sicherheit und Produktivität.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://shop.kintello.de" target="_blank" rel="noopener noreferrer">
                  Workshops entdecken
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Unsere Schulungsangebote</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Von Security Awareness bis Microsoft 365 – praxisnah und zielgerichtet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course, index) => {
                const Icon = course.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-pillar-academy transition-shadow">
                    <div className="w-12 h-12 bg-gradient-academy rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>
                    <div className="text-sm text-pillar-academy font-semibold">
                      Dauer: {course.duration}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 px-4 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <GraduationCap className="w-16 h-16 mx-auto mb-6 text-pillar-academy" />
              <h2 className="text-4xl font-bold mb-6">Unser Ansatz</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Wir glauben an praxisnahes Lernen. Unsere Schulungen sind interaktiv, auf Ihre Branche zugeschnitten 
                und vermitteln sofort anwendbares Wissen. Keine Powerpoint-Marathons, sondern echte Erkenntnisse 
                und nachhaltige Verhaltensänderungen.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-pillar-academy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-pillar-academy" />
                  </div>
                  <h3 className="font-bold mb-2">Praxisnah</h3>
                  <p className="text-sm text-muted-foreground">
                    Realitätsnahe Szenarien und Übungen
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-pillar-academy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-pillar-academy" />
                  </div>
                  <h3 className="font-bold mb-2">Interaktiv</h3>
                  <p className="text-sm text-muted-foreground">
                    Workshops statt Frontalunterricht
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-pillar-academy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-pillar-academy" />
                  </div>
                  <h3 className="font-bold mb-2">Zielgerichtet</h3>
                  <p className="text-sm text-muted-foreground">
                    Auf Ihre Bedürfnisse zugeschnitten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <Card className="bg-gradient-academy border-0 p-12 text-center text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Investieren Sie in Ihr wichtigstes Asset: Ihr Team
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Buchen Sie jetzt Ihren ersten Workshop oder vereinbaren Sie ein Beratungsgespräch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://shop.kintello.de" target="_blank" rel="noopener noreferrer">
                    Workshop buchen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://outlook.office.com/book/Kintello@Kintello.de" target="_blank" rel="noopener noreferrer">
                    Beratung anfragen
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Academy;

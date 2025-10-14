import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Datenschutz auf einen Blick</h2>
              
              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>

              <h3>Datenerfassung auf dieser Website</h3>
              <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h4>Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um 
                Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder 
                Uhrzeit des Seitenaufrufs).
              </p>

              <h2>2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <h3>Externes Hosting</h3>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v.a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>

              <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3>Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                dieser Datenschutzerklärung.
              </p>

              <h2>4. Kontakt</h2>
              <p>
                Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
              </p>
              <p>
                <strong>Kintello</strong><br />
                E-Mail: info@kintello.de<br />
                Telefon: +49-151 404050 11
              </p>

              <p className="text-sm text-muted-foreground mt-8">
                Stand: Januar 2025
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;

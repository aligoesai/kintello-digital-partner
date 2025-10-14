import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8">Impressum</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
                <p>
                  <strong>Kintello</strong><br />
                  [Firmenname vollständig]<br />
                  [Straße und Hausnummer]<br />
                  [PLZ und Ort]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
                <p>
                  Telefon: +49-151 404050 11<br />
                  E-Mail: info@kintello.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Vertreten durch</h2>
                <p>
                  Morten Hanke<br />
                  Alimhan Abdukadyrow
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [USt-IdNr.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                  Morten Hanke<br />
                  [Adresse]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  https://ec.europa.eu/consumers/odr/.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

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

export default Impressum;

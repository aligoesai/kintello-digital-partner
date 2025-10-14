import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kintello</h3>
            <p className="text-sm text-primary-foreground/80">
              Wir schaffen die IT-Basis für Ihr Wachstum.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/full-service" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Full Service
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  AI Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@kintello.de" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@kintello.de
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+4915140405011" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +49-151 404050 11
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4" />
                <a
                  href="https://www.linkedin.com/company/107647808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>Copyright 2025 © Kintello. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

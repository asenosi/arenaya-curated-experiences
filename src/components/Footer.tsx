import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Tenders", href: "/tenders" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Arenaya</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Curated Gifts & Branded Experiences
            </p>
            <p className="text-xs text-primary-foreground/70 italic">
              Thoughtful. Premium. On time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:hello@arenaya.co.za"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  hello@arenaya.co.za
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+27000000000"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +27 00 000 0000
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70 pt-4">
              Serving South Africa & Eswatini
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Arenaya Corporate Gifting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Tenders", href: "/tenders" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl lg:text-3xl font-heading font-bold text-royal-navy tracking-tight transition-all duration-300 group-hover:text-rich-gold group-hover:scale-105">
              Arenaya
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md group",
                  location.pathname === item.href
                    ? "text-royal-navy bg-rich-gold/10 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-rich-gold after:scale-x-100"
                    : "text-foreground/80 hover:text-royal-navy hover:bg-rich-gold/5 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-royal-navy after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left active:scale-95"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="default" size="default" className="bg-royal-navy hover:bg-rich-gold hover:scale-105 transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground hover:text-royal-navy transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-card/98 backdrop-blur-md z-50 overflow-y-auto animate-fade-up">
            <div className="container mx-auto px-4 py-8 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-md transition-all duration-300 active:scale-95",
                    location.pathname === item.href
                      ? "text-royal-navy bg-rich-gold/10 border-l-4 border-rich-gold"
                      : "text-foreground/80 hover:text-royal-navy hover:bg-rich-gold/5 hover:border-l-4 hover:border-royal-navy border-l-4 border-transparent"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild variant="default" size="lg" className="w-full bg-royal-navy hover:bg-rich-gold transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

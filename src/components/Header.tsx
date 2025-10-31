import { useState, useEffect } from "react";
import type React from "react";
import { createPortal } from "react-dom";
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
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (location.pathname === href) {
      e.preventDefault();
      setMobileMenuOpen(false);
      // Delay scrolling until after the mobile overlay closes on mobile
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    }
  };

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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
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
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md group lg:h-20 lg:flex lg:items-center lg:px-6 lg:rounded-none",
                  location.pathname === item.href
                    ? "bg-royal-navy text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-rich-gold after:scale-x-100"
                    : "text-foreground/80 hover:text-royal-navy hover:bg-rich-gold/5 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-royal-navy after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left active:scale-95"
                )}
                aria-current={location.pathname === item.href ? "page" : undefined}
                onClick={handleNavClick(item.href)}
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

      </nav>

      {/* Mobile menu - Outside nav for proper z-index stacking */}
      {mobileMenuOpen &&
        createPortal(
          <>
            <div
              className="lg:hidden fixed inset-0 top-16 z-[900] bg-black/30 animate-fade-in will-change-[opacity]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="lg:hidden fixed top-16 left-0 bottom-0 z-[1000] w-[60%] bg-background overflow-y-auto shadow-lg border-t border-r border-border animate-slide-in-left will-change-transform">
              <div className="px-0 py-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block w-full px-6 py-4 text-base font-medium transition-all duration-300 active:scale-95 rounded-none border-b border-border/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      location.pathname === item.href
                        ? "bg-rich-gold text-royal-navy font-bold"
                        : "text-foreground hover:text-white hover:bg-royal-navy"
                    )}
                    onClick={(e) => {
                      if (location.pathname === item.href) {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 0);
                      }
                    }}
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
          </>,
          document.body
        )}
    </header>
  );
}

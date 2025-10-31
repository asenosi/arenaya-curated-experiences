import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import realEstateImg from "@/assets/real-estate-gift.jpg";
import apparelImg from "@/assets/branded-apparel.jpg";
import hamperImg from "@/assets/executive-hamper.jpg";

const services = [
  {
    id: "real-estate",
    title: "Real Estate Gifting",
    description: "First impressions that last—handover sets, welcome boxes, home scents.",
    details: "Celebrate property handovers with elegantly curated gift sets that leave a lasting impression. From champagne duos to luxury candles and welcome cards, we help you mark this milestone with sophistication.",
    samplePacks: [
      "Champagne duo with embossed glassware",
      "Key handover box with premium ribbon",
      "Luxury candle & personalized welcome card",
    ],
    image: realEstateImg,
  },
  {
    id: "dealership",
    title: "Dealership Gifting",
    description: "Celebrate every drive with premium handover gifts and loyalty sets.",
    details: "Make vehicle handovers memorable with premium gift sets that reflect the quality of your brand. From cooler bags to executive hampers, we create experiences that resonate.",
    samplePacks: [
      "Cooler + wine set with branded accessories",
      "Tumbler + keyring in presentation box",
      "Executive snack hamper with gourmet treats",
    ],
    image: hamperImg,
  },
  {
    id: "corporate",
    title: "Corporate Gifting Essentials",
    description: "Timeless office gifts—diaries, notebooks, pens, desk mugs, tech add-ons.",
    details: "Equip your team and clients with beautifully branded essentials that enhance daily work life. Quality materials, thoughtful design, and impeccable branding.",
    samplePacks: [
      "Leather-bound diary with embossed logo",
      "Premium pen & notebook set",
      "Ceramic mug with custom design",
    ],
    image: hamperImg,
  },
  {
    id: "apparel",
    title: "Branded Apparel & Event Merchandise",
    description: "Dress the brand—golf shirts, caps, jackets; embroidery, screen print, heat press.",
    details: "From corporate uniforms to event merchandise, we offer premium apparel with professional branding. Embroidery, screen printing, and heat press options available.",
    samplePacks: [
      "Golf shirts with embroidered logos",
      "Caps and beanies with custom branding",
      "Jackets and event wear collections",
    ],
    image: apparelImg,
  },
  {
    id: "office-launch",
    title: "Office Launch Kits",
    description: "Welcome-to-your-desk packs, launch gift bags, décor touches.",
    details: "Celebrate new office spaces and team expansions with stylish launch kits. Create excitement and belonging from day one.",
    samplePacks: [
      "Welcome desk pack with stationery",
      "Launch gift bag with branded items",
      "Office décor and personalized touches",
    ],
    image: hamperImg,
  },
];

export default function Services() {
  const location = useLocation();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Scroll spy for sticky sub-nav
  useEffect(() => {
    const sectionIds = services.map((s) => s.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const currentId = visible[0].target.id;
          setActiveId(currentId);
          try {
            window.history.replaceState(null, "", `#${currentId}`);
          } catch {}
        }
      },
      {
        root: null,
        rootMargin: "-140px 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Turnkey gifting and branding across key industries.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Nav */}
      <nav className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border lg:h-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto py-4 lg:py-0 space-x-2 lg:space-x-4 scrollbar-hide">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={cn(
                  "flex-shrink-0 px-4 py-2 text-sm font-medium rounded-md transition-colors relative",
                  activeId === service.id
                    ? "bg-royal-navy text-white font-bold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-rich-gold"
                    : "text-foreground/80 hover:text-primary hover:bg-secondary/5",
                  // Desktop: make item fill full bar height and remove rounding
                  "lg:h-14 lg:flex lg:items-center lg:px-6 lg:rounded-none"
                )}
                aria-current={activeId === service.id ? "page" : undefined}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Services Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 space-y-24">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-32 animate-fade-up"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-block px-4 py-1 bg-terracotta/10 text-terracotta text-sm font-semibold rounded-full">
                  {service.title}
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                  {service.description}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Sample Packages:</h3>
                  <ul className="space-y-2">
                    {service.samplePacks.map((pack, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span className="text-muted-foreground">{pack}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </Card>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Mini Gallery */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse of our curated gift solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="overflow-hidden aspect-square">
                <img
                  src={i % 3 === 0 ? realEstateImg : i % 2 === 0 ? apparelImg : hamperImg}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

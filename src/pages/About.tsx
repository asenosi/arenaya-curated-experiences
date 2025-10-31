import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award, ShieldCheck, Palette } from "lucide-react";
import heroImage from "@/assets/hero-gifts.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We obsess over details from concept to delivery. Every ribbon, every embossed logo, every package is crafted with meticulous attention to quality and presentation.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Honest lead times, quality materials, fair pricing. We build lasting partnerships by being transparent, reliable, and committed to delivering exactly what we promise.",
  },
  {
    icon: Palette,
    title: "Creativity",
    description:
      "Design-led curation that tells your brand story. We don't just source products—we create experiences that resonate with recipients and reflect your values.",
  },
];

const whyArenaya = [
  {
    title: "Design-Led Approach",
    description: "Every gift is curated with aesthetic excellence and brand alignment in mind.",
  },
  {
    title: "Premium Packaging",
    description: "First impressions matter. Our packaging transforms gifts into memorable experiences.",
  },
  {
    title: "Reliable Lead Times",
    description: "Ready in 7-14 working days. We respect your deadlines and deliver on time, every time.",
  },
  {
    title: "Cross-Border Expertise",
    description: "Seamless delivery across South Africa and Eswatini with full compliance support.",
  },
];

export default function About() {
  const location = useLocation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const sections = [
    { id: "story", title: "Our Story" },
    { id: "values", title: "Values" },
    { id: "why", title: "Why Arenaya" },
    { id: "founder", title: "Founder Note" },
  ] as const;

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

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveId(id);
          try {
            window.history.replaceState(null, "", `#${id}`);
          } catch {}
        }
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: [0.2, 0.4, 0.6, 0.8] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground hover:text-royal-navy transition-colors duration-300 cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-[-6px] after:left-0 after:bg-rich-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              About Arenaya
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Curated Gifts & Branded Experiences
            </p>
            <p className="text-base text-muted-foreground italic">
              Thoughtful. Premium. On time.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Nav */}
      <nav className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border lg:h-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto py-4 lg:py-0 space-x-2 lg:space-x-4 scrollbar-hide">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "flex-shrink-0 px-4 py-2 text-sm font-medium rounded-md transition-colors relative lg:h-14 lg:flex lg:items-center lg:px-6 lg:rounded-none",
                  activeId === s.id
                    ? "bg-royal-navy text-white font-bold after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-rich-gold"
                    : "text-foreground/80 hover:text-primary hover:bg-secondary/5"
                )}
                aria-current={activeId === s.id ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(s.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    try {
                      window.history.replaceState(null, "", `#${s.id}`);
                    } catch {}
                  }
                }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Brand Story */}
      <section id="story" className="py-16 lg:py-24 scroll-mt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground hover:text-rich-gold transition-colors duration-300 cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-[-6px] after:left-0 after:bg-royal-navy after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Arenaya was born from a simple belief: corporate gifting should be an experience,
                  not a transaction. We saw too many generic gifts, rushed timelines, and missed
                  opportunities to create genuine connections.
                </p>
                <p>
                  Today, we partner with businesses across South Africa and Eswatini to transform
                  gifting moments into lasting impressions. From real estate handovers to dealership
                  celebrations, from office launches to year-end appreciation—we bring design,
                  quality, and care to every detail.
                </p>
                <p>
                  Our approach is hands-on and collaborative. We listen, we curate, we deliver.
                  And we do it with the kind of excellence that makes recipients feel truly valued.
                </p>
              </div>
            </div>

            <div className="animate-fade-up">
              <Card className="overflow-hidden">
                <img
                  src={heroImage}
                  alt="Arenaya curated gift set"
                  className="w-full h-[500px] object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16 lg:py-24 bg-card scroll-mt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 hover:text-royal-navy transition-colors duration-300 cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-[-6px] after:left-0 after:bg-rich-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto stagger-children">
            {values.map((value) => (
              <Card 
                key={value.title} 
                className="group border-2 border-secondary/20 bg-gradient-to-br from-card via-card to-accent/5 hover:shadow-xl hover:-translate-y-2 hover:border-rich-gold/40 transition-all duration-500 cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rich-gold/5 to-rich-gold/10 group-hover:via-rich-gold/10 group-hover:to-rich-gold/20 transition-all duration-500" />
                <CardContent className="p-8 text-center space-y-4 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 group-hover:bg-rich-gold/25 group-hover:scale-110 transition-all duration-500">
                    <value.icon className="w-8 h-8 text-secondary group-hover:text-royal-navy transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-royal-navy transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Arenaya */}
      <section id="why" className="py-16 lg:py-24 scroll-mt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground hover:text-rich-gold transition-colors duration-300 cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-[-6px] after:left-0 after:bg-royal-navy after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Why Choose Arenaya
              </h2>
              <p className="text-lg text-muted-foreground">
                What sets us apart in the corporate gifting landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {whyArenaya.map((item, index) => (
                <Card 
                  key={index} 
                  className="group animate-fade-up bg-gradient-to-br from-card to-accent/10 hover:shadow-2xl hover:-translate-y-1 hover:border-royal-navy/30 transition-all duration-500 cursor-pointer relative overflow-hidden" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-rich-gold/0 to-rich-gold/0 group-hover:via-rich-gold/5 group-hover:to-rich-gold/10 transition-all duration-700" />
                  <CardContent className="p-6 lg:p-8 space-y-3 relative z-10">
                    <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-rich-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section id="founder" className="py-16 lg:py-24 bg-muted/30 scroll-mt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="group bg-gradient-to-br from-card via-accent/5 to-card hover:shadow-2xl hover:-translate-y-1 hover:border-royal-navy/40 transition-all duration-700 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-royal-navy/0 via-transparent to-rich-gold/0 group-hover:from-royal-navy/8 group-hover:to-rich-gold/8 transition-all duration-700" />
              <CardContent className="p-8 lg:p-12 space-y-6 relative z-10">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-royal-navy transition-colors duration-300">
                    A Personal Note
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-rich-gold transition-colors duration-300">From the Arenaya team</p>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  <p>
                    "We started Arenaya because we believe that gifting is more than logistics—it's
                    an opportunity to show appreciation, build relationships, and create moments that matter."
                  </p>
                  <p>
                    "Whether you're celebrating a property handover, welcoming a new team member, or
                    thanking a valued client, we're here to make that moment extraordinary. Thank you
                    for trusting us with your gifting needs."
                  </p>
                </div>
                <div className="pt-4 border-t border-border group-hover:border-rich-gold/30 transition-colors duration-500 text-center">
                  <p className="text-sm text-muted-foreground italic group-hover:text-rich-gold transition-colors duration-300">
                    With appreciation,<br />
                    The Arenaya Team
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

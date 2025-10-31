import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileText, Leaf } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Brief & Budget",
    description: "We start by understanding your goals, target audience, required quantities, and budget parameters. This alignment ensures we create solutions that meet your exact needs and deliver maximum impact.",
    details: [
      "Initial consultation to understand your brand and objectives",
      "Define target audience and occasion",
      "Establish quantity requirements and timelines",
      "Set budget parameters and delivery locations",
    ],
  },
  {
    number: 2,
    title: "Concept & Mood Board",
    description: "Our design team curates options tailored to your brief, presenting mood boards and packaging direction. We focus on creating cohesive experiences that align with your brand identity.",
    details: [
      "Curated product selection based on your brief",
      "Mood board with packaging concepts",
      "Material and color palette proposals",
      "Multiple options at different price points",
    ],
  },
  {
    number: 3,
    title: "Branding & Production",
    description: "Once approved, we move into production with precision and care. Every product is branded to specification, with rigorous quality control at each stage to ensure consistency and excellence.",
    details: [
      "Artwork approval and specification finalization",
      "Professional branding (embroidery, screen print, embossing)",
      "Quality control throughout production",
      "Sample approval before full production run",
    ],
  },
  {
    number: 4,
    title: "Delivery & Logistics",
    description: "We handle the logistics to ensure your gifts arrive on time, beautifully presented, and event-ready. Our delivery network covers South Africa and Eswatini with cross-border capability.",
    details: [
      "Hand-checked assemblies for quality assurance",
      "Protective packaging for safe transport",
      "On-time delivery to your specified locations",
      "Cross-border delivery capability (SA & Eswatini)",
    ],
  },
];

export default function Process() {
  const location = useLocation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const sections = [
    { id: "steps", title: "Steps" },
    { id: "packaging", title: "Packaging" },
    { id: "sustainability", title: "Sustainability" },
    { id: "timeline", title: "Timeline" },
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
      .map((s) => ({ id: s.id, el: document.getElementById(s.id) as HTMLElement | null }))
      .filter((x): x is { id: string; el: HTMLElement } => !!x.el);
    if (els.length === 0) return;

    // Ensure a sensible default selection
    if (!activeId) setActiveId(els[0].id);

    const pickClosest = () => {
      const headerOffset = 120;
      let best: { id: string; dist: number } | null = null;
      els.forEach(({ id, el }) => {
        const top = el.getBoundingClientRect().top - headerOffset;
        // prefer the section whose top is nearest to header (<=0 means passed the header)
        const dist = top <= 0 ? Math.abs(top) : top + 1000; // bias toward sections already reached
        if (!best || dist < best.dist) best = { id, dist };
      });
      if (best) setActiveId(best.id);
    };

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
        } else {
          // Fallback when nothing meets threshold (e.g., first section)
          pickClosest();
        }
      },
      { rootMargin: "-100px 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] }
    );
    els.forEach(({ el }) => observer.observe(el));

    // Also update on scroll for robustness
    const onScroll = () => pickClosest();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Our Process
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              From concept to delivery, we make corporate gifting effortless and elegant.
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

      {/* Process Steps */}
      <section id="steps" className="py-16 lg:py-24 scroll-mt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold font-heading">
                    {step.number}
                  </div>
                  <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-heading font-bold text-foreground">
                      {step.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <Card className="bg-card/50">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-secondary mr-3 mt-1">✓</span>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="ml-8 my-8 h-12 w-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Selection */}
      <section id="packaging" className="py-16 lg:py-24 bg-card scroll-mt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                Packaging Selection
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We curate packaging that aligns with the occasion and your brand identity.
              </p>
            </div>
            <Card>
              <CardContent className="p-8 lg:p-12 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Packaging is the recipient's first impression—it needs to be accurate, elegant, and professional.
                  We select materials, ribbons, tissue, and presentation boxes that enhance the unboxing experience
                  and reinforce your brand values.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Premium Materials</h3>
                    <p className="text-muted-foreground">Satin ribbons, textured papers, and luxury boxes</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Brand Alignment</h3>
                    <p className="text-muted-foreground">Colors and finishes that match your identity</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Secure Presentation</h3>
                    <p className="text-muted-foreground">Protective packing for safe transit</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Attention to Detail</h3>
                    <p className="text-muted-foreground">Every element curated for impact</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-16 lg:py-24 scroll-mt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-muted/30 border-2 border-secondary/20">
              <CardContent className="p-8 lg:p-12 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
                  <Leaf className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  Sustainability Note
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  We prioritize local suppliers where possible and offer recyclable packaging materials upon request.
                  Our commitment is to deliver premium experiences while being mindful of our environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline & Download */}
      <section id="timeline" className="py-16 lg:py-24 bg-card scroll-mt-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Typical Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready in as little as 7–14 working days after approval, depending on complexity and quantities.
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="/assets/Arenaya_Process.pdf" download>
                <FileText className="w-5 h-5" />
                Download Process Guide (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

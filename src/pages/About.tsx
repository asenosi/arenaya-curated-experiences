import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-gifts.jpg";

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We obsess over details from concept to delivery. Every ribbon, every embossed logo, every package is crafted with meticulous attention to quality and presentation.",
  },
  {
    icon: Sparkles,
    title: "Integrity",
    description: "Honest lead times, quality materials, fair pricing. We build lasting partnerships by being transparent, reliable, and committed to delivering exactly what we promise.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Design-led curation that tells your brand story. We don't just source products—we create experiences that resonate with recipients and reflect your values.",
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
  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground hover:text-royal-navy transition-colors duration-300 cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rich-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
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

      {/* Brand Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground hover:text-rich-gold transition-colors duration-300 cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-royal-navy after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
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
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 hover:text-royal-navy transition-colors duration-300 cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rich-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
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
                <div className="absolute inset-0 bg-gradient-to-br from-royal-navy/0 via-royal-navy/0 to-rich-gold/0 group-hover:from-royal-navy/5 group-hover:to-rich-gold/5 transition-all duration-500" />
                <CardContent className="p-8 text-center space-y-4 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 group-hover:bg-rich-gold/20 group-hover:scale-110 transition-all duration-500">
                    <value.icon className="w-8 h-8 text-secondary group-hover:text-rich-gold transition-colors duration-500" />
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground hover:text-rich-gold transition-colors duration-300 cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-royal-navy after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
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
      <section className="py-16 lg:py-24 bg-muted/30">
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

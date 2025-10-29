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
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
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
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
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
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto stagger-children">
            {values.map((value) => (
              <Card key={value.title} className="border-2 border-secondary/20">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                Why Choose Arenaya
              </h2>
              <p className="text-lg text-muted-foreground">
                What sets us apart in the corporate gifting landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {whyArenaya.map((item, index) => (
                <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 lg:p-8 space-y-3">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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
            <Card>
              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    A Personal Note
                  </h3>
                  <p className="text-sm text-muted-foreground">From the Arenaya team</p>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                <div className="pt-4 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground italic">
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

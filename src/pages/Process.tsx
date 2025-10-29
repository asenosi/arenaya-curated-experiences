import { Card, CardContent } from "@/components/ui/card";
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

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
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
      <section className="py-16 lg:py-24 bg-card">
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
      <section className="py-16 lg:py-24">
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
      <section className="py-16 lg:py-24 bg-card">
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

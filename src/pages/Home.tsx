import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Building2, Car, Briefcase, Shirt, Home as HomeIcon } from "lucide-react";
import heroImage from "@/assets/hero-gifts.jpg";
import realEstateImg from "@/assets/real-estate-gift.jpg";
import apparelImg from "@/assets/branded-apparel.jpg";
import hamperImg from "@/assets/executive-hamper.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const valuePillars = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We obsess over details from concept to delivery.",
  },
  {
    icon: Sparkles,
    title: "Integrity",
    description: "Honest lead times, quality materials, fair pricing.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Design-led curation that tells your brand story.",
  },
];

const industries = [
  {
    icon: HomeIcon,
    title: "Real Estate Gifting",
    description: "Keys, champagne, and welcome sets that win hearts.",
    href: "/services#real-estate",
  },
  {
    icon: Car,
    title: "Dealership Gifting",
    description: "Handovers that feel premium and memorable.",
    href: "/services#dealership",
  },
  {
    icon: Briefcase,
    title: "Corporate Essentials",
    description: "Diaries, notebooks, pens, mugs—beautifully branded.",
    href: "/services#corporate",
  },
  {
    icon: Shirt,
    title: "Branded Apparel",
    description: "Golf shirts, caps, jackets, event wear.",
    href: "/services#apparel",
  },
  {
    icon: Building2,
    title: "Office Launch Kits",
    description: "Celebrate new spaces with style.",
    href: "/services#office-launch",
  },
];

const featuredPackages = [
  {
    title: "Classic Welcome Set",
    description: "Notebook, pen, mug, ribboned box.",
    price: "From R 450",
    image: heroImage,
    link: "/packages",
  },
  {
    title: "Executive Cooler & Wine",
    description: "Urban Terrain 12L + wine & accessories.",
    price: "From R 1,250",
    image: hamperImg,
    link: "/packages",
  },
  {
    title: "Palazzo Blanket Hamper",
    description: "Alex Varga faux-fur + premium treats.",
    price: "From R 890",
    image: realEstateImg,
    link: "/packages",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Brief & Budget",
    description: "Align goals, audience, quantities.",
  },
  {
    number: "2",
    title: "Concept & Mood Board",
    description: "Curated options and packaging direction.",
  },
  {
    number: "3",
    title: "Branding & Production",
    description: "Approved specs, quality control.",
  },
  {
    number: "4",
    title: "Delivery",
    description: "On-time, securely packed, event-ready.",
  },
];

const testimonials = [
  {
    quote: "Arenaya transformed our property handovers into unforgettable experiences. The attention to detail is exceptional.",
    author: "Sarah M.",
    company: "Premier Properties SA",
  },
  {
    quote: "Reliable, creative, and always on time. Our dealership clients love the premium gift sets.",
    author: "James K.",
    company: "Luxury Auto Group",
  },
  {
    quote: "From concept to delivery, Arenaya delivered beyond expectations. Truly a partner we trust.",
    author: "Linda T.",
    company: "Corporate Events Co.",
  },
];

export default function Home() {
  const valuePillarsAnim = useScrollAnimation();
  const industriesAnim = useScrollAnimation();
  const packagesAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const testimonialsAnim = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center pt-16 lg:pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Curated Corporate Gifting & Branding
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Premium gifts, elegant packaging, and reliable delivery across SA & Eswatini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8">
                <a href="/assets/Arenaya_Catalogue.pdf" download>
                  View Catalogue
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={valuePillarsAnim.elementRef}
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 transition-all duration-700",
              valuePillarsAnim.isVisible ? "opacity-100 translate-y-0 stagger-children" : "opacity-0 translate-y-8"
            )}
          >
            {valuePillars.map((pillar) => (
              <div key={pillar.title} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
                  <pillar.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored gifting solutions for your specific industry needs.
            </p>
          </div>

          <div 
            ref={industriesAnim.elementRef}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700",
              industriesAnim.isVisible ? "opacity-100 translate-y-0 stagger-children" : "opacity-0 translate-y-8"
            )}
          >
            {industries.map((industry) => (
              <Link key={industry.title} to={industry.href}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 lg:p-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Featured Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughtfully curated gift sets ready to be branded for your company.
            </p>
          </div>

          <div 
            ref={packagesAnim.elementRef}
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700",
              packagesAnim.isVisible ? "opacity-100 translate-y-0 stagger-children" : "opacity-0 translate-y-8"
            )}
          >
            {featuredPackages.map((pkg) => (
              <Card key={pkg.title} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground">{pkg.description}</p>
                  <p className="text-lg font-semibold text-secondary">{pkg.price}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={pkg.link}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to delivery, we make corporate gifting effortless.
            </p>
          </div>

          <div 
            ref={processAnim.elementRef}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700",
              processAnim.isVisible ? "opacity-100 translate-y-0 stagger-children" : "opacity-0 translate-y-8"
            )}
          >
            {processSteps.map((step) => (
              <div key={step.number} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground text-2xl font-bold font-heading">
                  {step.number}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div 
            ref={testimonialsAnim.elementRef}
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700",
              testimonialsAnim.isVisible ? "opacity-100 translate-y-0 stagger-children" : "opacity-0 translate-y-8"
            )}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6 lg:p-8 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <p className="text-xl lg:text-2xl font-heading">
              Ready in as little as 7–14 working days after approval.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

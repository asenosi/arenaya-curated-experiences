import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Building2, Car, Briefcase, Shirt, Home as HomeIcon, ArrowRight, Heart, Award, Eye, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-gifts.jpg";
import realEstateImg from "@/assets/real-estate-gift.jpg";
import apparelImg from "@/assets/branded-apparel.jpg";
import hamperImg from "@/assets/executive-hamper.jpg";
import industryRealEstate from "@/assets/industry-real-estate.jpg";
import industryDealership from "@/assets/industry-dealership.jpg";
import industryCorporate from "@/assets/industry-corporate.jpg";
import industryApparel from "@/assets/industry-apparel.jpg";
import industryOffice from "@/assets/industry-office.jpg";
import ScrollReveal from "@/components/ScrollReveal";

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

const whyGiftingMatters = [
  {
    icon: Heart,
    title: "Build Stronger Relationships",
    description: "Thoughtful gifts create meaningful connections with clients, partners, employees, and stakeholders—turning business relationships into lasting ones.",
  },
  {
    icon: Award,
    title: "Show Appreciation",
    description: "Recognising people for their contribution, loyalty, or partnership goes a long way. A carefully chosen gift says, \"We see you. We value you.\"",
  },
  {
    icon: Eye,
    title: "Keep Your Brand Top of Mind",
    description: "Branded gifts transform everyday products into powerful brand touchpoints. When your brand becomes part of someone's daily life, your business stays memorable.",
  },
  {
    icon: Sparkles,
    title: "Create Memorable Experiences",
    description: "From onboarding boxes to milestone celebrations and corporate events, the right gift can turn an ordinary moment into an experience people remember.",
  },
  {
    icon: Users,
    title: "Celebrate the People Behind Your Business",
    description: "Your employees, clients, and partners are an important part of your success. Gifting gives you a tangible way to celebrate their milestones, achievements, and moments that matter.",
  },
  {
    icon: Calendar,
    title: "Make Every Occasion Count",
    description: "Whether it's an event, campaign, celebration, achievement, onboarding, or simply a moment of appreciation, we help you find the right gift for the occasion.",
  },
];

const industries = [
  {
    icon: HomeIcon,
    title: "Real Estate Gifting",
    description: "Keys, champagne, and welcome sets that win hearts.",
    href: "/services#real-estate",
    image: industryRealEstate,
  },
  {
    icon: Car,
    title: "Dealership Gifting",
    description: "Handovers that feel premium and memorable.",
    href: "/services#dealership",
    image: industryDealership,
  },
  {
    icon: Briefcase,
    title: "Corporate Essentials",
    description: "Diaries, notebooks, pens, mugs—beautifully branded.",
    href: "/services#corporate",
    image: industryCorporate,
  },
  {
    icon: Shirt,
    title: "Branded Apparel",
    description: "Golf shirts, caps, jackets, event wear.",
    href: "/services#apparel",
    image: industryApparel,
  },
  {
    icon: Building2,
    title: "Office Launch Kits",
    description: "Celebrate new spaces with style.",
    href: "/services#office-launch",
    image: industryOffice,
  },
];

const featuredPackages = [
  {
    title: "Classic Welcome Set",
    description: "Notebook, pen, mug, ribboned box.",
    image: heroImage,
    link: "/packages",
  },
  {
    title: "Executive Cooler & Wine",
    description: "Urban Terrain 12L + wine & accessories.",
    image: hamperImg,
    link: "/packages",
  },
  {
    title: "Palazzo Blanket Hamper",
    description: "Alex Varga faux-fur + premium treats.",
    image: realEstateImg,
    link: "/packages",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {valuePillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 100}>
                <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
                  <pillar.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Arenaya */}
      <section className="py-16 lg:py-24">
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
                <ScrollReveal key={item.title} delay={index * 150} direction={index % 2 === 0 ? "left" : "right"}>
                  <Card className="group h-full bg-gradient-to-br from-card to-accent/10 hover:shadow-2xl hover:-translate-y-1 hover:border-royal-navy/30 transition-all duration-500 cursor-pointer relative overflow-hidden">
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
                </ScrollReveal>
              ))}
            </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <ScrollReveal
                key={industry.title}
                delay={index * 150}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Link to={industry.href} className="block h-full group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/50 hover:border-primary/40">
                  <div className="relative h-full min-h-[280px] sm:min-h-[320px]">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/90 transition-all duration-300" />

                    {/* Content */}
                    <CardContent className="relative h-full p-5 md:p-6 lg:p-7 flex flex-col justify-between">
                      <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 border border-white/20">
                        <industry.icon className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-primary-foreground" />
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-white group-hover:text-primary-foreground transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">{industry.description}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
              </ScrollReveal>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredPackages.map((pkg, index) => (
              <ScrollReveal key={pkg.title} delay={index * 150}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
                  <Button asChild variant="outline" className="w-full">
                    <Link to={pkg.link}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
              </ScrollReveal>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="bg-background">
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
              </ScrollReveal>
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

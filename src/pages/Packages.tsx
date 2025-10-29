import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CurrencyToggle, { useCurrency } from "@/components/CurrencyToggle";
import heroImage from "@/assets/hero-gifts.jpg";
import realEstateImg from "@/assets/real-estate-gift.jpg";
import apparelImg from "@/assets/branded-apparel.jpg";
import hamperImg from "@/assets/executive-hamper.jpg";

const packages = [
  {
    name: "Classic Braai & Chill",
    category: "Staff Gifting",
    contents: ["Spice set", "Insulated tumbler", "Gourmet snacks", "Ribboned gift box"],
    branding: "Screen print on tumbler",
    leadTime: "10-14 working days",
    moq: 20,
    zarPrice: 380,
    ePrice: 380,
    image: hamperImg,
  },
  {
    name: "Executive Cooler & Wine",
    category: "Client Gifting",
    contents: ["Urban Terrain 12L cooler", "Premium wine bottle", "Corkscrew & glasses", "Branded ribbon"],
    branding: "Embroidery on cooler",
    leadTime: "14-21 working days",
    moq: 10,
    zarPrice: 1250,
    ePrice: 1250,
    image: hamperImg,
  },
  {
    name: "Palazzo Blanket Hamper",
    category: "Premium Gifting",
    contents: ["Alex Varga faux-fur blanket", "Artisanal chocolate", "Hot drink sachets", "Luxury gift box"],
    branding: "Embroidered tag on blanket",
    leadTime: "14-21 working days",
    moq: 15,
    zarPrice: 890,
    ePrice: 890,
    image: realEstateImg,
  },
  {
    name: "Desk Essentials Set",
    category: "Corporate Gifting",
    contents: ["A5 diary", "Ruled notebook", "Metal pen", "Ceramic mug"],
    branding: "Embossed logo on diary, screen print on mug",
    leadTime: "7-10 working days",
    moq: 25,
    zarPrice: 450,
    ePrice: 450,
    image: heroImage,
  },
  {
    name: "Event Apparel Kit",
    category: "Branded Apparel",
    contents: ["Golf shirt", "Cap", "Lanyard", "Badge holder"],
    branding: "Embroidery on shirt & cap",
    leadTime: "14-21 working days",
    moq: 30,
    zarPrice: 620,
    ePrice: 620,
    image: apparelImg,
  },
  {
    name: "Welcome Home Set",
    category: "Real Estate",
    contents: ["Premium candle", "Welcome card", "House keys presentation box", "Champagne or sparkling wine"],
    branding: "Embossed card, branded ribbon",
    leadTime: "10-14 working days",
    moq: 10,
    zarPrice: 780,
    ePrice: 780,
    image: realEstateImg,
  },
];

const categories = ["All", "Staff Gifting", "Client Gifting", "Premium Gifting", "Corporate Gifting", "Branded Apparel", "Real Estate"];

export default function Packages() {
  const { currency, setCurrency, formatPrice } = useCurrency();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages = selectedCategory === "All"
    ? packages
    : packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Curated Packages
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Pre-designed gift sets ready to be customized with your branding.
            </p>
            <div className="flex justify-center pt-4">
              <CurrencyToggle value={currency} onChange={setCurrency} />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.name} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mb-2">
                      {pkg.category}
                    </Badge>
                    <CardTitle className="text-xl font-heading">{pkg.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Contents:</h4>
                    <ul className="space-y-1">
                      {pkg.contents.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Branding:</span> {pkg.branding}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Lead time:</span> {pkg.leadTime}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">MOQ:</span> {pkg.moq} units
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-2xl font-bold text-secondary mb-4">
                      {formatPrice(pkg.zarPrice, pkg.ePrice)}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">Request this package</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No packages found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            All packages include branding unless noted. Final quote provided upon approval of brief, artwork, and quantities.
            Pricing subject to change based on customization requirements.
          </p>
        </div>
      </section>
    </div>
  );
}

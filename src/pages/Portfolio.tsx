import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import realEstateImg from "@/assets/real-estate-gift.jpg";
import apparelImg from "@/assets/branded-apparel.jpg";
import hamperImg from "@/assets/executive-hamper.jpg";
import heroImage from "@/assets/hero-gifts.jpg";

const portfolioItems = [
  { id: 1, category: "Real Estate", image: realEstateImg, description: "Premium handover gift set with champagne and welcome card" },
  { id: 2, category: "Apparel", image: apparelImg, description: "Embroidered golf shirts and caps for corporate event" },
  { id: 3, category: "Corporate", image: hamperImg, description: "Executive hamper with gourmet treats and branded cooler" },
  { id: 4, category: "Real Estate", image: heroImage, description: "Luxury packaging with satin ribbon and embossed notebooks" },
  { id: 5, category: "Dealership", image: hamperImg, description: "Vehicle handover gift set with premium accessories" },
  { id: 6, category: "Corporate", image: realEstateImg, description: "Office desk essentials with custom branding" },
  { id: 7, category: "Apparel", image: apparelImg, description: "Team uniform collection with embroidered logos" },
  { id: 8, category: "Office Launch", image: heroImage, description: "Welcome desk pack for new office space" },
  { id: 9, category: "Real Estate", image: realEstateImg, description: "Welcome home hamper with artisanal products" },
  { id: 10, category: "Corporate", image: hamperImg, description: "Year-end appreciation gift set" },
  { id: 11, category: "Dealership", image: heroImage, description: "Luxury client loyalty gift package" },
  { id: 12, category: "Apparel", image: apparelImg, description: "Event merchandise with heat press branding" },
];

const categories = ["All", "Real Estate", "Dealership", "Corporate", "Apparel", "Office Launch"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Our Portfolio
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Beautifully crafted gifts that leave lasting impressions.
            </p>
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

      {/* Masonry Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden break-inside-avoid cursor-pointer transition-all duration-300 hover:shadow-lg group"
                onClick={() => setLightboxImage(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.description}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {lightboxImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

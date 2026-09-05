import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle?: string;
  images: string[];
  className?: string;
  intervalMs?: number;
  minHeightClass?: string; // e.g., "min-h-[360px] lg:min-h-[420px]"
};

export default function Hero({
  title,
  subtitle,
  images,
  className,
  intervalMs = 5000,
  minHeightClass = "min-h-[360px] lg:min-h-[420px]",
}: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs]);

  return (
    <section className={cn("relative flex items-center justify-center", minHeightClass, className)}>
      {/* Background slides */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              i === index ? "opacity-100" : "opacity-0",
            )}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white">{title}</h1>
          {subtitle && (
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}


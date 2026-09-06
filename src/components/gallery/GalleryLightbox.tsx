import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

interface Props {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

export default function GalleryLightbox({ items, index, onClose, onIndexChange }: Props) {
  const item = items[index];
  const touchStart = useRef<number | null>(null);
  const [entered, setEntered] = useState(false);

  const next = useCallback(() => onIndexChange((index + 1) % items.length), [index, items.length, onIndexChange]);
  const prev = useCallback(() => onIndexChange((index - 1 + items.length) % items.length), [index, items.length, onIndexChange]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [next, prev, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — image ${index + 1} of ${items.length}`}
      onClick={onClose}
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-foreground/95 backdrop-blur-sm px-4 py-16 transition-opacity duration-300 ${
        entered ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 rounded-full border border-background/25 p-2.5 text-background/80 transition-colors hover:bg-background/10 hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-background"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
        className="absolute left-2 md:left-6 rounded-full border border-background/25 p-3 text-background/80 transition-colors hover:bg-background/10 hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
        className="absolute right-2 md:right-6 rounded-full border border-background/25 p-3 text-background/80 transition-colors hover:bg-background/10 hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(dx) > 50) (dx < 0 ? next() : prev());
          touchStart.current = null;
        }}
        className={`flex max-h-full w-full max-w-5xl flex-col items-center gap-5 transition-all duration-500 ease-out ${
          entered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          key={item.id}
          src={item.image}
          alt={item.title}
          className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl animate-fade-in"
        />
        <figcaption className="text-center text-background">
          <span className="block text-xs uppercase tracking-[0.25em] text-rich-gold">{item.category}</span>
          <span className="mt-2 block font-heading text-xl md:text-2xl">{item.title}</span>
          {item.description && (
            <span className="mt-2 block max-w-xl text-sm text-background/70">{item.description}</span>
          )}
          <span className="mt-4 block text-xs tracking-[0.2em] text-background/50">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

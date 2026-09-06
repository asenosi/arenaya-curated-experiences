import { useEffect, useRef, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import GalleryLightbox from "./GalleryLightbox";
import { cn } from "@/lib/utils";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Layout recipe per tile: column span, aspect ratio, vertical offset, parallax depth. */
const layout = [
  { span: "md:col-span-7", aspect: "aspect-[4/5] md:aspect-[16/11]", offset: "md:mt-0", depth: 22, drift: "kb-a" },
  { span: "md:col-span-5", aspect: "aspect-[4/5]", offset: "md:mt-16 lg:mt-24", depth: -14, drift: "kb-b" },
  { span: "md:col-span-4", aspect: "aspect-square", offset: "md:-mt-6 lg:-mt-10", depth: 10, drift: "kb-c" },
  { span: "md:col-span-8", aspect: "aspect-[4/3] md:aspect-[16/9]", offset: "md:mt-8 lg:mt-12", depth: -20, drift: "kb-a" },
  { span: "md:col-span-6", aspect: "aspect-[4/5] md:aspect-[5/6]", offset: "md:mt-0", depth: 16, drift: "kb-b" },
  { span: "md:col-span-6", aspect: "aspect-[4/3]", offset: "md:mt-20 lg:mt-28", depth: -10, drift: "kb-c" },
  { span: "md:col-span-12", aspect: "aspect-[4/3] md:aspect-[21/9]", offset: "md:mt-4", depth: 14, drift: "kb-a" },
  { span: "md:col-span-5", aspect: "aspect-[4/5]", offset: "md:mt-0", depth: -16, drift: "kb-b" },
  { span: "md:col-span-7", aspect: "aspect-[4/3] md:aspect-[16/11]", offset: "md:mt-14 lg:mt-20", depth: 12, drift: "kb-c" },
];

interface TileProps {
  item: GalleryItem;
  index: number;
  reduced: boolean;
  onOpen: (i: number) => void;
}

function GalleryTile({ item, index, reduced, onOpen }: TileProps) {
  const cfg = layout[index % layout.length];
  const wrapRef = useRef<HTMLButtonElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const inView = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll parallax on the inner media layer (transform only, rAF-throttled).
  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = wrapRef.current;
      const media = mediaRef.current;
      if (!el || !media || !inView.current) return;
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      media.style.setProperty("--py", `${(-progress * cfg.depth).toFixed(2)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [cfg.depth, reduced]);

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (reduced) return;
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tx", `${(x * 6).toFixed(2)}deg`);
    el.style.setProperty("--ty", `${(-y * 6).toFixed(2)}deg`);
  };

  const resetTilt = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--tx", "0deg");
    el.style.setProperty("--ty", "0deg");
  };

  return (
    <button
      type="button"
      ref={wrapRef}
      onClick={() => onOpen(index)}
      onPointerMove={onPointerMove}
      onPointerLeave={resetTilt}
      aria-label={`View ${item.title}`}
      className={cn(
        "gallery-tile group relative block w-full overflow-hidden rounded-2xl text-left",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-rich-gold focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        cfg.span,
        cfg.offset,
        visible ? "is-visible" : ""
      )}
    >
      <div className={cn("relative overflow-hidden rounded-2xl bg-muted shadow-lg", cfg.aspect)}>
        <div ref={mediaRef} className="gallery-media absolute inset-0">
          {item.video ? (
            <video
              src={item.video}
              poster={item.image}
              muted
              loop
              playsInline
              autoPlay={!reduced}
              className="h-full w-full object-cover"
              style={{ objectPosition: item.focal ?? "center" }}
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className={cn("h-full w-full object-cover", !reduced && `gallery-drift gallery-${cfg.drift}`)}
              style={{ objectPosition: item.focal ?? "center" }}
            />
          )}
        </div>

        {/* Gradient + caption */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 lg:p-7">
          <span className="block text-[0.7rem] uppercase tracking-[0.25em] text-rich-gold">
            {item.category}
          </span>
          <span className="mt-2 block font-heading text-lg text-background md:text-xl lg:text-2xl">
            {item.title}
          </span>
          {item.description && (
            <span className="mt-2 block max-w-sm text-sm text-background/0 transition-all duration-500 md:group-hover:text-background/80">
              {item.description}
            </span>
          )}
        </div>
        <span className="pointer-events-none absolute right-5 top-5 hidden rounded-full border border-background/40 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-background opacity-0 backdrop-blur-sm transition-all duration-500 md:block group-hover:opacity-100">
          View
        </span>
      </div>
    </button>
  );
}

export default function CinematicGallery() {
  const reduced = usePrefersReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(hsl(var(--foreground))_1px,transparent_1px)] [background-size:4px_4px]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="block text-sm font-medium uppercase tracking-[0.2em] text-secondary">
            The Gallery
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Moments We've Made
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-rich-gold" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A closer look at the details—curation, packaging and branding brought together.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:gap-8 lg:gap-10">
          {galleryItems.map((item, i) => (
            <GalleryTile key={item.id} item={item} index={i} reduced={reduced} onOpen={setOpenIndex} />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <GalleryLightbox
          items={galleryItems}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}

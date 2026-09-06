import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import giftBoxNavy from "@/assets/gallery/gift-box-navy.jpg";
import apparelStack from "@/assets/gallery/apparel-stack.jpg";
import deskSet from "@/assets/gallery/desk-set.jpg";
import handoverChampagne from "@/assets/gallery/handover-champagne.jpg";
import gourmetHamper from "@/assets/gallery/gourmet-hamper.jpg";
import officeLaunchPack from "@/assets/gallery/office-launch-pack.jpg";
import realEstateImg from "@/assets/real-estate-gift.jpg";
import apparelImg from "@/assets/branded-apparel.jpg";
import hamperImg from "@/assets/executive-hamper.jpg";
import industryRealEstate from "@/assets/industry-real-estate.jpg";
import industryDealership from "@/assets/industry-dealership.jpg";
import industryApparel from "@/assets/industry-apparel.jpg";
import industryCorporate from "@/assets/industry-corporate.jpg";
import industryOffice from "@/assets/industry-office.jpg";
import heroGifts from "@/assets/hero-gifts.jpg";

type Category = "Real Estate" | "Dealership" | "Apparel" | "Corporate" | "Office";

interface Work {
  src: string;
  title: string;
  caption: string;
  category: Category;
}

const works: Work[] = [
  { src: giftBoxNavy, title: "Signature Navy Box", caption: "Gold foil card, satin ribbon, hand-tied finish.", category: "Corporate" },
  { src: handoverChampagne, title: "Handover Duo", caption: "Engraved flutes and a gold key tag.", category: "Real Estate" },
  { src: apparelStack, title: "Embroidered Kit", caption: "Golf shirts and caps, logo stitched in gold.", category: "Apparel" },
  { src: deskSet, title: "Executive Desk Set", caption: "Leather diary, brass pen, ceramic mug.", category: "Corporate" },
  { src: gourmetHamper, title: "Gourmet Crate", caption: "Artisan chocolates, nuts and a bottle to toast.", category: "Corporate" },
  { src: officeLaunchPack, title: "Welcome Desk Pack", caption: "Day-one kit for a brand new floor.", category: "Office" },
  { src: realEstateImg, title: "Keys & Candles", caption: "A calm welcome for a new front door.", category: "Real Estate" },
  { src: industryDealership, title: "Drive Away Set", caption: "Cooler, tumbler and keyring in one box.", category: "Dealership" },
  { src: apparelImg, title: "Team Colours", caption: "Uniform rollout, print and embroidery mixed.", category: "Apparel" },
  { src: hamperImg, title: "Executive Hamper", caption: "The one clients remember at year end.", category: "Corporate" },
  { src: industryRealEstate, title: "Show House Styling", caption: "Presentation pieces for launch day.", category: "Real Estate" },
  { src: industryApparel, title: "Event Merchandise", caption: "Caps, tees and totes for the floor team.", category: "Apparel" },
  { src: industryCorporate, title: "Boardroom Branding", caption: "Diaries and pens, quietly branded.", category: "Corporate" },
  { src: industryOffice, title: "Launch Bags", caption: "Handed out as the doors opened.", category: "Office" },
  { src: heroGifts, title: "The Full Table", caption: "A complete curation, styled and shot.", category: "Corporate" },
];

const filters: ("All" | Category)[] = ["All", "Real Estate", "Dealership", "Apparel", "Corporate", "Office"];

/* Deterministic pseudo-random helpers so the layout feels hand-placed, not gridded */
const tilts = [-3.5, 2.5, -1.5, 4, -2.5, 1.5, 3, -4, 2, -1, 3.5, -2, 1, -3, 2.8];
const offsets = [0, 56, 24, 88, 12, 64, 32, 96, 8, 48, 20, 72, 40, 16, 60];
const speeds = [0.06, -0.09, 0.12, -0.05, 0.1, -0.13, 0.07, -0.08, 0.11, -0.06, 0.09, -0.11, 0.05, -0.1, 0.08];

export default function Gallery() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [cursor, setCursor] = useState({ x: 50, y: 30 });
  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const filtered = useMemo(
    () => works.map((w, i) => ({ ...w, index: i })).filter((w) => active === "All" || w.category === active),
    [active]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frame = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Staggered reveal as tiles enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          setRevealed((prev) => (prev.has(idx) ? prev : new Set(prev).add(idx)));
        });
      },
      { threshold: 0.15 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filtered.length, active]);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: number) => {
      setLightbox((prev) => {
        if (prev === null) return prev;
        const pos = filtered.findIndex((w) => w.index === prev);
        const next = (pos + dir + filtered.length) % filtered.length;
        return filtered[next].index;
      });
    },
    [filtered]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, step]);

  const onStageMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  const marquee = [...works, ...works];
  const current = lightbox !== null ? works[lightbox] : null;

  return (
    <div className="min-h-screen">

      {/* Kinetic hero */}
      <section className="relative overflow-hidden bg-primary pt-28 pb-16 lg:pt-36 lg:pb-24 text-primary-foreground">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--gold) / 0.6), transparent 45%), radial-gradient(circle at 80% 60%, hsl(var(--terracotta) / 0.5), transparent 50%)`,
            transform: reduced ? undefined : `translate3d(0, ${scrollY * 0.15}px, 0)`,
          }}
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 lg:px-8">
          <p className="text-xs lg:text-sm tracking-[0.35em] uppercase text-secondary">The Archive</p>
          <h1 className="mt-4 font-heading text-4xl lg:text-6xl font-bold max-w-3xl">
            Work we've wrapped, stitched and delivered
          </h1>
          <p className="mt-5 max-w-2xl text-base lg:text-lg text-primary-foreground/80">
            Fifteen moments from real projects. Hover to hear the story, click to see it full screen.
          </p>
        </div>

        {/* Scrolling word ribbon */}
        <div className="relative mt-12 border-y border-primary-foreground/15 py-4 overflow-hidden">
          <div className={cn("flex whitespace-nowrap", !reduced && "animate-[marquee_36s_linear_infinite]")}>
            {[...Array(2)].map((_, dup) => (
              <span key={dup} className="flex shrink-0">
                {["Curated", "Branded", "Presented", "Delivered", "Remembered"].map((word) => (
                  <span key={word} className="mx-6 font-heading text-2xl lg:text-4xl text-primary-foreground/25">
                    {word}
                    <span className="text-secondary"> — </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 lg:top-20 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide" role="tablist" aria-label="Filter gallery">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={cn(
                  "flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  active === f
                    ? "bg-royal-navy text-primary-foreground shadow-md scale-[1.03]"
                    : "text-foreground/70 hover:text-primary hover:bg-secondary/10"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Drifting mosaic */}
      <section
        ref={stageRef}
        onMouseMove={onStageMove}
        className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(420px circle at ${cursor.x}% ${cursor.y}%, hsl(var(--gold) / 0.13), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((work, i) => {
            const seed = work.index;
            const isRevealed = revealed.has(work.index) || reduced;
            const drift = reduced ? 0 : (scrollY - 400) * speeds[seed % speeds.length];
            return (
              <div
                key={work.title}
                data-idx={work.index}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="group"
                style={{ marginTop: `${offsets[seed % offsets.length] / (i % 2 === 0 ? 1 : 1.6)}px` }}
              >
                <button
                  onClick={() => setLightbox(work.index)}
                  className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
                  aria-label={`Open ${work.title}`}
                >
                  <figure
                    className={cn(
                      "relative overflow-hidden rounded-sm bg-card shadow-sm transition-[transform,box-shadow,opacity] duration-700 ease-out will-change-transform",
                      isRevealed ? "opacity-100" : "opacity-0",
                      "group-hover:shadow-2xl"
                    )}
                    style={{
                      transitionDelay: `${(i % 6) * 90}ms`,
                      transform: isRevealed
                        ? `translate3d(0, ${drift}px, 0) rotate(${tilts[seed % tilts.length]}deg)`
                        : `translate3d(0, 60px, 0) rotate(0deg) scale(0.94)`,
                      aspectRatio: seed % 5 === 0 ? "3 / 4" : seed % 3 === 0 ? "1 / 1" : "4 / 5",
                    }}
                  >
                    <img
                      src={work.src}
                      alt={`${work.title} — ${work.caption}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
                    />
                    {/* gold frame that draws itself in */}
                    <span
                      className="pointer-events-none absolute inset-3 border border-secondary/0 transition-all duration-500 group-hover:inset-2 group-hover:border-secondary/70"
                      aria-hidden="true"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-secondary">{work.category}</span>
                      <span className="mt-1 block font-heading text-lg text-primary-foreground">{work.title}</span>
                      <span className="mt-1 block text-sm text-primary-foreground/80">{work.caption}</span>
                    </figcaption>
                  </figure>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Filmstrip reel */}
      <section className="overflow-hidden bg-primary py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 mb-8">
          <h2 className="font-heading text-2xl lg:text-3xl text-primary-foreground">The reel</h2>
          <p className="text-primary-foreground/70">Every project, on a loop. Hover to hold it still.</p>
        </div>
        <div className="group relative">
          <div
            className={cn(
              "flex w-max gap-4 lg:gap-6",
              !reduced && "animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused]"
            )}
          >
            {marquee.map((work, i) => (
              <button
                key={`${work.title}-${i}`}
                onClick={() => setLightbox(i % works.length)}
                className="relative h-40 w-56 lg:h-56 lg:w-80 shrink-0 overflow-hidden rounded-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                aria-label={`Open ${work.title}`}
              >
                <img src={work.src} alt={work.title} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-primary/30 transition-opacity duration-500 hover:opacity-0" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">Your project could be next</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us the occasion, the audience and the brand — we'll curate, brand and deliver.
          </p>
          <Button asChild size="lg" className="mt-8 bg-secondary text-secondary-foreground hover:bg-rich-gold">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-primary/95 backdrop-blur-md animate-fade-in p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 rounded-full p-3 text-primary-foreground/80 transition hover:bg-primary-foreground/10 hover:text-primary-foreground"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 lg:left-8 rounded-full p-3 text-primary-foreground/80 transition hover:bg-primary-foreground/10 hover:text-primary-foreground"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 lg:right-8 rounded-full p-3 text-primary-foreground/80 transition hover:bg-primary-foreground/10 hover:text-primary-foreground"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
          <figure className="max-h-[85vh] max-w-5xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={`${current.title} — ${current.caption}`}
              className="max-h-[70vh] w-auto rounded-sm object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-secondary">{current.category}</span>
              <span className="mt-2 block font-heading text-2xl text-primary-foreground">{current.title}</span>
              <span className="mt-1 block text-primary-foreground/75">{current.caption}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

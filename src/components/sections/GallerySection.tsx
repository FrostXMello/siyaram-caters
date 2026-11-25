"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { galleryFilters, galleryItems, type GalleryCategory } from "@/content/gallery";

const aspect = {
  wide: "aspect-[3/2]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
} as const;

const frameTone = ["bg-rani", "bg-marigold", "bg-teal", "bg-terracotta"] as const;

export function GallerySection() {
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  const current = openIndex === null ? null : items[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((index) =>
        index === null ? index : (index + direction + items.length) % items.length,
      );
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  return (
    <section id="gallery" className="scroll-mt-20 bg-ink text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(3rem,8.4vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.05em] lg:col-span-8">
            The
            <span className="font-serif font-medium italic tracking-[-0.03em] text-marigold"> gallery</span>
          </h2>
          <p className="max-w-xs self-end text-base leading-relaxed text-ivory/70 lg:col-span-3 lg:col-start-10">
            Catering setups, event spaces, the restaurant table and the sweet counter.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {galleryFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => {
                setFilter(item.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                filter === item.id
                  ? "bg-rani text-ivory"
                  : "border border-ivory/30 hover:bg-ivory/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open photo: ${item.alt}`}
              className={`group relative block w-full break-inside-avoid overflow-hidden p-1.5 ${
                frameTone[index % frameTone.length]
              }`}
            >
              <span className={`relative block w-full overflow-hidden ${aspect[item.shape]}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {current ? (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery photo"
            className="fixed inset-0 z-[90] flex items-center justify-center bg-wine/95 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center bg-ivory text-wine hover:bg-marigold sm:right-8 sm:top-8"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center bg-ivory text-wine hover:bg-marigold sm:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center bg-ivory text-wine hover:bg-marigold sm:right-6"
            >
              <ChevronRight className="size-5" />
            </button>

            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative flex max-h-full w-full max-w-5xl flex-col gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[68vh] w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="text-center text-sm text-ivory/80">
                {current.alt}
                <span className="ml-3 text-ivory/50">
                  {(openIndex ?? 0) + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

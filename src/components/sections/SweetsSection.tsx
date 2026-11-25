"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArchFrame } from "@/components/patterns/ArchFrame";
import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import {
  sweetCategories,
  sweetClaims,
  sweetOccasions,
  sweets,
  type SweetCategory,
} from "@/content/sweets";

type SweetsSectionProps = {
  onEnquire?: (occasion?: string) => void;
};

export function SweetsSection({ onEnquire }: SweetsSectionProps) {
  const [category, setCategory] = useState<"All" | SweetCategory>("All");
  const [selectedId, setSelectedId] = useState(sweets[0].id);

  const visible = category === "All" ? sweets : sweets.filter((sweet) => sweet.category === category);
  const featured = visible.find((sweet) => sweet.id === selectedId) ?? visible[0];

  return (
    <section id="sweets" className="scroll-mt-20 bg-ivory text-ink">
      {/* Header band */}
      <div className="relative overflow-hidden bg-rani text-ivory">
        <JaaliPattern />
        <div className="relative mx-auto grid grid-cols-[minmax(0,1fr)] max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <Reveal className="lg:col-span-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
              Siyaram Sweets · Near Muhana Mandi
            </p>
            <h2 className="mt-4 font-display text-[clamp(3.2rem,9vw,8.6rem)] font-extrabold leading-[0.86] tracking-[-0.055em]">
              Mithai, made
              <span className="block font-serif font-medium italic tracking-[-0.03em] text-marigold">
                this morning.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="self-end lg:col-span-4">
            <ul className="grid grid-cols-2 gap-px bg-ivory/25">
              {sweetClaims.map((claim) => (
                <li key={claim.title} className="bg-rani-deep p-4">
                  <p className="font-display text-lg font-extrabold leading-tight">{claim.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ivory/75">{claim.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Explorer */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter sweets">
          {sweetCategories.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
              className={`px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                category === name
                  ? "bg-wine text-marigold"
                  : "border border-wine/25 text-wine hover:border-rani hover:text-rani"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Featured sweet */}
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-8 sm:grid-cols-[minmax(0,15rem)_1fr] lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[15rem]">
              <ArchFrame className="relative aspect-[400/580] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featured.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <SafeImage
                      src={featured.image}
                      fallbackSrc={featured.fallbackImage}
                      alt={`${featured.name} from Siyaram Sweets`}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </ArchFrame>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-rani">
                  {featured.tagline}
                </p>
                <h3 className="mt-3 font-display text-[clamp(2.6rem,5.6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
                  {featured.name}
                </h3>
                <p className="mt-4 max-w-md font-serif text-xl italic leading-snug text-ink/80">
                  {featured.description}
                </p>
                {featured.items ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {featured.items.map((item) => (
                      <li
                        key={item}
                        className="bg-marigold px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-wine"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-7">
                  <CtaButton tone="rani" onClick={() => onEnquire?.("Mithai order")}>
                    Order {featured.name}
                  </CtaButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* List */}
          <ul className="flex flex-col border-t border-wine/20 lg:col-span-5">
            {visible.map((sweet) => {
              const selected = sweet.id === featured.id;
              return (
                <li key={sweet.id} className="border-b border-wine/20">
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSelectedId(sweet.id)}
                    className={`flex w-full items-baseline justify-between gap-4 px-3 py-4 text-left transition-colors ${
                      selected ? "bg-rani text-ivory" : "hover:bg-marigold/30"
                    }`}
                  >
                    <span className="font-display text-2xl font-extrabold tracking-tight">
                      {sweet.name}
                    </span>
                    <span
                      className={`text-right text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${
                        selected ? "text-marigold" : "text-wine/60"
                      }`}
                    >
                      {sweet.category}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Occasions */}
      <div className="bg-wine text-ivory">
        <div className="mx-auto grid grid-cols-[minmax(0,1fr)] max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
          <Reveal className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
              Every occasion
            </p>
            <h3 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] lg:text-5xl">
              Festival boxes to{" "}
              <span className="font-serif font-medium italic text-rani">wedding orders.</span>
            </h3>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              Call for big orders and we will sit down with you, understand what you need and give a
              clear quote.
            </p>
          </Reveal>
          <div className="grid grid-cols-[minmax(0,1fr)] gap-px bg-ivory/15 sm:grid-cols-2 lg:col-span-8">
            {sweetOccasions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onEnquire?.(item.occasion)}
                className="group flex flex-col gap-1 bg-wine p-5 text-left transition-colors hover:bg-wine-raised"
              >
                <span className="font-display text-xl font-extrabold tracking-tight group-hover:text-marigold">
                  {item.title}
                </span>
                <span className="text-sm leading-relaxed text-ivory/65">{item.note}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { eventItems } from "@/content/services";

type EventsExplorerProps = {
  onEnquire?: (occasion?: string) => void;
};

export function EventsExplorer({ onEnquire }: EventsExplorerProps) {
  const [activeId, setActiveId] = useState(eventItems[0].id);
  const active = eventItems.find((item) => item.id === activeId) ?? eventItems[0];

  return (
    <section id="events" className="relative scroll-mt-20 overflow-hidden bg-terracotta text-ivory">
      <JaaliPattern />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
            Events we cater
          </p>
          <h2 className="mt-4 font-display text-[clamp(3rem,8.4vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
            What are you
            <span className="block font-serif font-medium italic tracking-[-0.03em] text-marigold">
              celebrating?
            </span>
          </h2>
        </Reveal>

        <div
          role="tablist"
          aria-label="Event types"
          className="mt-12 flex gap-2 overflow-x-auto pb-3"
        >
          {eventItems.map((item) => {
            const selected = item.id === active.id;
            return (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setActiveId(item.id)}
                className={`shrink-0 px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  selected
                    ? "bg-marigold text-wine"
                    : "border border-ivory/40 hover:bg-ivory/10"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-0 lg:grid-cols-12">
          <div className="relative min-h-[18rem] overflow-hidden bg-wine lg:col-span-7 lg:min-h-[32rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex flex-col justify-between gap-10 bg-wine p-7 sm:p-10 lg:col-span-5 lg:mt-12 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-marigold">
                  {active.label}
                </p>
                <h3 className="mt-3 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
                  {active.headline}
                </h3>
                <p className="mt-5 font-serif text-xl italic leading-snug text-ivory/85">
                  {active.copy}
                </p>
              </motion.div>
            </AnimatePresence>
            <div>
              <CtaButton tone="marigold" onClick={() => onEnquire?.(active.occasion)}>
                {active.cta}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { cateringServices, weddingFunctions } from "@/content/services";

type CateringSectionProps = {
  onEnquire?: (occasion?: string) => void;
};

export function CateringSection({ onEnquire }: CateringSectionProps) {
  const [activeId, setActiveId] = useState(cateringServices[0].id);
  const active = cateringServices.find((service) => service.id === activeId) ?? cateringServices[0];

  return (
    <section id="catering" className="relative scroll-mt-20 overflow-hidden bg-marigold text-wine">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-terracotta">
            Catering · Indoor &amp; outdoor
          </p>
          <h2 className="mt-4 font-display text-[clamp(3.4rem,10vw,9.5rem)] font-extrabold leading-[0.84] tracking-[-0.055em]">
            Catering,
            <span className="block font-serif font-medium italic tracking-[-0.03em] text-terracotta">
              your way.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Occasion selector */}
          <div className="lg:col-span-5">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em]">
              Choose what you are hosting
            </p>
            <ul className="flex flex-col border-t border-wine/30">
              {cateringServices.map((service, index) => {
                const selected = service.id === active.id;
                return (
                  <li key={service.id} className="border-b border-wine/30">
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setActiveId(service.id)}
                      className={`group flex w-full items-baseline gap-4 px-3 py-3 text-left transition-colors sm:px-4 ${
                        selected ? "bg-wine text-marigold" : "hover:bg-wine/10"
                      }`}
                    >
                      <span className="w-7 shrink-0 font-serif text-sm italic opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                        {service.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Selected panel */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-wine">
              <Image
                src="/images/catering/buffet-02.jpg"
                alt="Siyaram catering buffet counter with live service"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine via-wine/50 to-transparent" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-x-0 bottom-0 p-6 text-ivory sm:p-9"
                >
                  <h3 className="font-display text-3xl font-extrabold leading-none tracking-tight sm:text-5xl">
                    {active.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-ivory/85">
                    {active.summary}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <CtaButton tone="wine" onClick={() => onEnquire?.(active.occasion)}>
                Enquire about {active.title.toLowerCase()}
              </CtaButton>
              <span className="text-sm text-wine/70">
                Food, crockery, staff, setup and cleanup — all handled.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Wedding treatment */}
      <div className="relative bg-wine text-ivory">
        <JaaliPattern />
        <div className="relative mx-auto grid grid-cols-[minmax(0,1fr)] max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:py-24">
          <Reveal className="lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
              Wedding catering
            </p>
            <h3 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
              A wedding is
              <span className="block font-serif font-medium italic tracking-[-0.02em] text-rani">
                more than one night.
              </span>
            </h3>
            <p className="mt-6 max-w-md leading-relaxed text-ivory/80">
              A wedding doesn’t stop at the reception — it is preceded by an array of functions.
              We make sure the best food is served at each of them.
            </p>
            <div className="mt-8">
              <CtaButton tone="marigold" onClick={() => onEnquire?.("Wedding feast")}>
                Plan the wedding feast
              </CtaButton>
            </div>
          </Reveal>

          <div className="relative grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:col-span-7">
            {weddingFunctions.map((fn, index) => (
              <Reveal key={fn.id} delay={0.08 * index}>
                <div
                  className={`flex h-full flex-col justify-between gap-10 p-6 ${
                    index % 2 === 0 ? "bg-terracotta" : "bg-rani"
                  } ${index % 2 === 1 ? "sm:mt-10" : ""}`}
                >
                  <span className="font-serif text-5xl italic text-marigold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-3xl font-extrabold tracking-tight">
                      {fn.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-ivory/85">
                      {fn.note}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

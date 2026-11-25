"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { menuCategories, restaurantFacts } from "@/content/restaurant";

type RestaurantSectionProps = {
  onEnquire?: (occasion?: string) => void;
};

export function RestaurantSection({ onEnquire }: RestaurantSectionProps) {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const active = menuCategories.find((category) => category.id === activeId) ?? menuCategories[0];

  return (
    <section id="restaurant" className="relative scroll-mt-20 overflow-hidden bg-teal text-ivory">
      <JaaliPattern />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
              Siyaram Restaurant · Near Muhana Mandi
            </p>
            <h2 className="mt-4 font-display text-[clamp(3rem,8.6vw,8.2rem)] font-extrabold leading-[0.86] tracking-[-0.055em]">
              Ghar jaisa
              <span className="block font-serif font-medium italic tracking-[-0.03em] text-marigold">
                khana.
              </span>
            </h2>
          </div>
          <p className="max-w-xs self-end text-base leading-relaxed text-ivory/80 lg:col-span-3">
            Clean, honest, home-style food. Cooked fresh, every single day.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Category tabs */}
          <div className="min-w-0 lg:col-span-4">
            <div
              role="tablist"
              aria-label="Menu categories"
              className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0"
            >
              {menuCategories.map((category, index) => {
                const selected = category.id === active.id;
                return (
                  <button
                    key={category.id}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    onClick={() => setActiveId(category.id)}
                    className={`group flex shrink-0 items-baseline gap-3 border-b px-4 py-3 text-left transition-colors lg:px-3 ${
                      selected
                        ? "border-marigold bg-ivory text-teal-deep"
                        : "border-ivory/25 hover:bg-teal-deep"
                    }`}
                  >
                    <span className="font-serif text-sm italic opacity-70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="whitespace-nowrap font-display text-xl font-extrabold tracking-tight lg:text-2xl">
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu panel */}
          <div className="relative min-w-0 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-[minmax(0,1fr)] overflow-hidden bg-ivory text-ink sm:grid-cols-[1fr_1.05fr]"
              >
                <div className="relative min-h-64 sm:min-h-[26rem]">
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 p-7 sm:p-9">
                  <div>
                    <h3 className="font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] text-teal-deep">
                      {active.name}
                    </h3>
                    <p className="mt-3 font-serif text-lg italic leading-snug text-ink/75">
                      {active.blurb}
                    </p>
                    <ul className="mt-6 divide-y divide-wine/15 border-y border-wine/15">
                      {active.items.map((item) => (
                        <li key={item} className="py-2.5 font-display text-lg font-bold tracking-tight">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <CtaButton tone="wine" onClick={() => onEnquire?.("Private celebration")}>
                      Plan a group meal
                    </CtaButton>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-px bg-ivory/20 sm:grid-cols-2 lg:grid-cols-4">
          {restaurantFacts.map((fact) => (
            <li key={fact} className="bg-teal-deep p-5 text-sm leading-relaxed text-ivory/85">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

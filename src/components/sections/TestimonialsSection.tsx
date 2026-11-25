"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  testimonialGroups,
  testimonials,
  type TestimonialGroup,
} from "@/content/testimonials";

const groupTone: Record<TestimonialGroup, string> = {
  Catering: "bg-wine text-ivory",
  Sweets: "bg-rani text-ivory",
  Restaurant: "bg-teal text-ivory",
};

export function TestimonialsSection() {
  const [group, setGroup] = useState<TestimonialGroup>("Catering");
  const [index, setIndex] = useState(0);

  const list = testimonials.filter((item) => item.group === group);
  const active = list[index % list.length];

  function chooseGroup(next: TestimonialGroup) {
    setGroup(next);
    setIndex(0);
  }

  function step(direction: 1 | -1) {
    setIndex((value) => (value + direction + list.length) % list.length);
  }

  return (
    <section id="voices" className="scroll-mt-20 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(3rem,8vw,7.6rem)] font-extrabold leading-[0.88] tracking-[-0.05em] lg:col-span-8">
            In their
            <span className="block font-serif font-medium italic tracking-[-0.03em] text-rani">
              own words.
            </span>
          </h2>
          <div
            role="tablist"
            aria-label="Testimonial groups"
            className="flex flex-wrap items-end gap-2 lg:col-span-4 lg:justify-end"
          >
            {testimonialGroups.map((name) => (
              <button
                key={name}
                role="tab"
                type="button"
                aria-selected={group === name}
                onClick={() => chooseGroup(name)}
                className={`px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  group === name ? "bg-wine text-marigold" : "border border-wine/25 hover:border-rani hover:text-rani"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-px bg-wine/10 lg:grid-cols-12">
          <div className={`relative flex min-h-[26rem] flex-col justify-between gap-10 p-7 sm:p-12 lg:col-span-8 ${groupTone[group]}`}>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 right-6 font-serif text-[12rem] italic leading-none opacity-15"
            >
              “
            </span>
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div className="flex gap-1 text-marigold" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} className="size-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-6 font-serif text-[clamp(1.3rem,2.4vw,2.1rem)] italic leading-snug">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="font-display text-xl font-extrabold">{active.name}</span>
                  {active.context ? (
                    <span className="ml-2 text-sm text-ivory/70">· {active.context}</span>
                  ) : null}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
            <div className="relative flex items-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous testimonial"
                className="flex size-11 items-center justify-center border border-ivory/50 hover:bg-ivory hover:text-wine"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next testimonial"
                className="flex size-11 items-center justify-center border border-ivory/50 hover:bg-ivory hover:text-wine"
              >
                <ChevronRight className="size-5" />
              </button>
              <span className="ml-2 text-xs uppercase tracking-[0.2em] text-ivory/70">
                {(index % list.length) + 1} / {list.length}
              </span>
            </div>
          </div>

          <ul className="flex flex-col bg-ivory lg:col-span-4">
            {list.map((item, itemIndex) => {
              const selected = itemIndex === index % list.length;
              return (
                <li key={item.id} className="border-b border-wine/10 last:border-b-0">
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setIndex(itemIndex)}
                    className={`flex w-full flex-col items-start gap-1 px-5 py-4 text-left transition-colors ${
                      selected ? "bg-marigold text-wine" : "hover:bg-marigold/25"
                    }`}
                  >
                    <span className="font-display text-lg font-extrabold">{item.name}</span>
                    <span className="line-clamp-1 w-full text-sm text-ink/60">{item.quote}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { MarigoldMark } from "@/components/patterns/MarigoldMark";
import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { brandStory } from "@/content/brand";

type BrandStoryProps = {
  onEnquire?: (occasion?: string) => void;
};

export function BrandStory({ onEnquire }: BrandStoryProps) {
  const words = brandStory.headline.replace(/\.$/, "").split(" ");
  const lead = words.slice(0, 3).join(" ");
  const tail = words.slice(3).join(" ");

  return (
    <section id="story" className="relative scroll-mt-20 overflow-hidden bg-wine text-ivory">
      <JaaliPattern />
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[36%] bg-rani lg:block"
        aria-hidden="true"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto grid grid-cols-[minmax(0,1fr)] max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:py-32">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
              {brandStory.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[clamp(3rem,8.4vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              {lead}
              <span className="mt-1 block font-serif text-[0.86em] font-medium italic tracking-[-0.03em] text-rani">
                {tail}.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-12 max-w-3xl border-l-4 border-rani pl-6 sm:pl-8">
            <blockquote className="font-serif text-[clamp(1.5rem,2.8vw,2.4rem)] italic leading-snug text-ivory">
              “{brandStory.pullQuote}”
            </blockquote>
          </Reveal>

          <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-8 text-[1.02rem] leading-relaxed text-ivory/80 md:grid-cols-2 lg:max-w-4xl">
            {brandStory.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.1 * index}>
                <p className={index === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:font-extrabold first-letter:leading-[0.8] first-letter:text-marigold" : ""}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <CtaButton tone="marigold" onClick={() => onEnquire?.("Wedding feast")}>
              Talk to the family
            </CtaButton>
          </Reveal>
        </div>

        <div className="relative flex flex-col gap-4 lg:col-span-4 lg:pt-20">
          <MarigoldMark className="absolute -top-8 right-4 hidden size-24 opacity-90 lg:block" />
          {brandStory.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.12 * index} x={24} y={12}>
              <div
                className={`border border-ivory/25 bg-wine/70 p-6 backdrop-blur-sm ${
                  index === 1 ? "lg:-ml-12" : index === 2 ? "lg:ml-6" : ""
                }`}
              >
                <span className="font-serif text-4xl italic text-marigold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

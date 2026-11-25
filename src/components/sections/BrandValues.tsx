"use client";

import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { MarigoldMark } from "@/components/patterns/MarigoldMark";
import { Reveal } from "@/components/ui/Reveal";
import { brandValues } from "@/content/brand";

const accents = ["text-marigold", "text-ivory", "text-marigold", "text-ivory", "text-marigold", "text-ivory"];

export function BrandValues() {
  return (
    <section id="values" className="relative scroll-mt-20 overflow-hidden bg-rani text-ivory">
      <JaaliPattern />
      <MarigoldMark className="pointer-events-none absolute -right-24 top-16 size-[22rem] opacity-25" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
            What we hold to
          </p>
          <h2 className="mt-4 max-w-5xl font-display text-[clamp(3rem,8.4vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
            Six promises,
            <span className="block font-serif font-medium italic tracking-[-0.03em] text-marigold">
              kept at every table.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-[minmax(0,1fr)] gap-x-10 gap-y-12 md:grid-cols-2 lg:gap-x-24">
          {brandValues.map((value, index) => (
            <Reveal
              key={value.title}
              delay={(index % 2) * 0.1}
              className={index % 2 === 1 ? "md:mt-20" : ""}
            >
              <div className="relative border-t-2 border-ivory/40 pt-5">
                <span className="absolute -top-px right-0 bg-wine px-3 py-1 font-serif text-lg italic text-marigold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`font-display text-[clamp(2.4rem,5vw,4.4rem)] font-extrabold leading-[0.92] tracking-[-0.045em] ${accents[index]}`}
                >
                  {value.title}
                </h3>
                <p className="mt-4 max-w-md font-serif text-xl italic leading-snug text-ivory/90">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

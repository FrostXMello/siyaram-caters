"use client";

import Image from "next/image";
import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { venuePoolAlt, venuePoolImage, venues } from "@/content/venues";

type VenuesSectionProps = {
  onEnquire?: (occasion?: string) => void;
};

export function VenuesSection({ onEnquire }: VenuesSectionProps) {
  const [banquet, ...partners] = [...venues].sort((a, b) => (a.lowRes ? 1 : 0) - (b.lowRes ? 1 : 0));

  return (
    <section id="venues" className="relative scroll-mt-20 overflow-hidden bg-wine text-ivory">
      <JaaliPattern />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
            Venues
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(3rem,8.4vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
            Where the
            <span className="block font-serif font-medium italic tracking-[-0.03em] text-rani">
              feast happens.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Siyaram Banquet — feature */}
          <Reveal className="lg:col-span-8">
            <article className="group relative min-h-[26rem] overflow-hidden bg-wine-raised">
              <Image
                src={banquet.image}
                alt={banquet.imageAlt}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine via-wine/40 to-transparent" />
              <div className="relative flex min-h-[26rem] flex-col justify-end gap-4 p-7 sm:p-10">
                <h3 className="font-display text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
                  {banquet.name}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-ivory/85">{banquet.intro}</p>
                <div>
                  <CtaButton tone="marigold" onClick={() => onEnquire?.(banquet.occasion)}>
                    Enquire about the banquet
                  </CtaButton>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Partner venues — offset, framed at modest size (source images are small) */}
          <div className="flex flex-col gap-8 lg:col-span-4 lg:pt-16">
            {partners.map((venue, index) => (
              <Reveal key={venue.id} delay={0.1 * (index + 1)}>
                <article className={`bg-ivory p-3 text-ink ${index === 1 ? "lg:-ml-10" : ""}`}>
                  <div className="relative aspect-[8/5] overflow-hidden bg-ivory-deep">
                    <Image
                      src={venue.image}
                      alt={venue.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 pb-3 pt-4">
                    <h3 className="font-display text-3xl font-extrabold tracking-tight text-wine">
                      {venue.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{venue.intro}</p>
                    <button
                      type="button"
                      onClick={() => onEnquire?.(venue.occasion)}
                      className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-rani transition-colors hover:text-wine"
                    >
                      Enquire →
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Courtyard band */}
        <Reveal className="mt-14">
          <div className="relative grid grid-cols-[minmax(0,1fr)] min-h-64 overflow-hidden bg-rani sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
              <p className="font-serif text-3xl italic leading-tight sm:text-4xl">
                Host the function. Leave the feast to us.
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-ivory/85">
                Venue parties come with Siyaram’s food, crockery, staff, setup and cleanup.
              </p>
              <div>
                <CtaButton tone="ivory" onClick={() => onEnquire?.("Private celebration")}>
                  Plan a venue party
                </CtaButton>
              </div>
            </div>
            <div className="relative min-h-56">
              <Image
                src={venuePoolImage}
                alt={venuePoolAlt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

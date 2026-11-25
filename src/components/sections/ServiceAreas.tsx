"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { serviceAreas } from "@/content/areas";

type ServiceAreasProps = {
  onEnquire?: (occasion?: string) => void;
};

const homeId = "muhana-mandi";

export function ServiceAreas({ onEnquire }: ServiceAreasProps) {
  const [activeId, setActiveId] = useState(homeId);
  const active = serviceAreas.find((area) => area.id === activeId) ?? serviceAreas[0];
  const home = serviceAreas.find((area) => area.id === homeId) ?? serviceAreas[0];

  return (
    <section id="areas" className="scroll-mt-20 bg-ivory-deep text-ink">
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)] max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-teal">
              Service areas
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.6rem,4.6vw,4.6rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">
              From Muhana Mandi,
              <span className="block font-serif font-medium italic tracking-[-0.03em] text-rani">
                outwards.
              </span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink/75">
              Our shop and restaurant sit near Muhana Mandi, and our customers come from all over
              south Jaipur and beyond. Choose a neighbourhood on the map.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Neighbourhoods">
            {serviceAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                aria-pressed={area.id === active.id}
                onClick={() => setActiveId(area.id)}
                className={`px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  area.id === active.id
                    ? "bg-teal-deep text-marigold"
                    : "border border-teal-deep/30 text-teal-deep hover:bg-teal-deep/10"
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-rani bg-paper p-6">
            <p className="flex items-center gap-2 font-display text-3xl font-extrabold tracking-tight text-wine">
              <MapPin className="size-6 text-rani" strokeWidth={1.8} />
              {active.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {active.note
                ? `${active.note}. `
                : ""}
              We cater events in {active.name}, Jaipur.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <CtaButton tone="rani" onClick={() => onEnquire?.()}>
                Tell us about your event
              </CtaButton>
              {active.url ? (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-teal underline underline-offset-4 hover:text-rani"
                >
                  Local page
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Stylised map — not to scale */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <div
            className="relative aspect-[4/5] w-full overflow-hidden bg-teal-deep sm:aspect-[5/4]"
            role="group"
            aria-label="Stylised map of Jaipur neighbourhoods Siyaram serves (not to scale)"
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <pattern id="areas-grid" width="6" height="6" patternUnits="userSpaceOnUse">
                  <path d="M6 0H0V6" fill="none" stroke="#f3e6d4" strokeOpacity="0.07" strokeWidth="0.15" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#areas-grid)" />
              {/* Abstract roads */}
              <g fill="none" stroke="#f0b400" strokeOpacity="0.4" strokeWidth="0.45" strokeLinecap="round">
                <path d="M5 92 C 30 70, 40 52, 55 44 S 85 18, 96 6" />
                <path d="M8 14 C 30 28, 52 40, 62 62 S 70 88, 66 98" />
                <path d="M2 50 C 28 52, 60 46, 98 56" strokeDasharray="1.2 1.2" />
              </g>
              {/* Ring */}
              <ellipse
                cx="50"
                cy="40"
                rx="30"
                ry="24"
                fill="none"
                stroke="#e2186a"
                strokeOpacity="0.55"
                strokeWidth="0.35"
                strokeDasharray="1.5 1.5"
              />
              {/* Links from home */}
              <g stroke="#f3e6d4" strokeOpacity="0.18" strokeWidth="0.25">
                {serviceAreas
                  .filter((area) => area.id !== homeId)
                  .map((area) => (
                    <line key={area.id} x1={home.x} y1={home.y} x2={area.x} y2={area.y} />
                  ))}
              </g>
            </svg>

            <span className="pointer-events-none absolute left-4 top-4 font-serif text-lg italic text-ivory/60">
              Jaipur
            </span>
            <span className="pointer-events-none absolute bottom-3 right-4 text-[0.6rem] uppercase tracking-[0.22em] text-ivory/45">
              Stylised · not to scale
            </span>

            {serviceAreas.map((area) => {
              const selected = area.id === active.id;
              const isHome = area.id === homeId;
              return (
                <button
                  key={area.id}
                  type="button"
                  aria-label={area.name}
                  aria-pressed={selected}
                  onClick={() => setActiveId(area.id)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${area.x}%`, top: `${area.y}%` }}
                >
                  <span className="relative flex items-center justify-center">
                    {selected ? (
                      <motion.span
                        className="absolute size-9 rounded-full bg-marigold/40"
                        initial={{ scale: 0.6, opacity: 0.9 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                      />
                    ) : null}
                    <span
                      className={`block rounded-full border-2 transition-all ${
                        isHome ? "size-5 border-marigold bg-rani" : "size-3.5 border-ivory"
                      } ${selected ? "scale-125 bg-marigold" : isHome ? "" : "bg-teal-deep group-hover:bg-rani"}`}
                    />
                  </span>
                  <span
                    className={`absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap font-display text-[0.62rem] font-bold uppercase tracking-[0.1em] sm:text-[0.7rem] ${
                      selected || isHome ? "text-marigold" : "hidden text-ivory/80 sm:block"
                    }`}
                  >
                    {area.name}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

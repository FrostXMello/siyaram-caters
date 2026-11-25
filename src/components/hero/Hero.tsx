"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ArchFrame } from "@/components/patterns/ArchFrame";
import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { MarigoldMark } from "@/components/patterns/MarigoldMark";
import { DishTicker } from "@/components/hero/DishTicker";

const ease = [0.22, 1, 0.36, 1] as const;

type HeroProps = {
  onEnquire: () => void;
};

export function Hero({ onEnquire }: HeroProps) {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-x-clip bg-wine text-ivory">
      <JaaliPattern />

      <p className="pointer-events-none absolute top-1/2 left-3 z-20 hidden -translate-y-1/2 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-ivory/45 [writing-mode:vertical-rl] lg:block">
        Pink City
      </p>

      <div className="relative z-10 flex flex-1 flex-col px-5 pt-24 sm:px-8 lg:px-14 lg:pt-28">
        <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-8 lg:min-h-[calc(100svh-11.5rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-x-4 lg:gap-y-8">
          <motion.div
            className="relative z-20 lg:col-start-1 lg:row-start-1"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
              Jaipur · Sweets & catering
            </p>
            <h1 className="mt-4 font-display text-[clamp(3.25rem,5.6vw,6.4rem)] font-extrabold leading-[0.84] tracking-[-0.045em]">
              <span className="block">Taste</span>
              <span className="block">Jaipur’s</span>
              <span className="mt-1 block font-serif font-medium italic tracking-[-0.035em] text-marigold">
                long table.
              </span>
            </h1>
          </motion.div>

          <div className="relative z-10 mx-auto aspect-[400/580] w-[86%] max-w-[420px] justify-self-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[min(72vh,640px)] lg:w-auto lg:max-w-none lg:-translate-x-8 lg:justify-self-start">
            <motion.div
              className="pointer-events-none absolute top-0 left-1/2 z-30 hidden w-12 -translate-x-1/2 -translate-y-1/2 lg:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            >
              <MarigoldMark className="h-full w-full" />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease }}
            >
              <ArchFrame className="absolute inset-0">
                <motion.div
                  className="relative h-full w-full"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease }}
                >
                  <Image
                    src="/images/gulab.jpg"
                    alt="A stack of gulab jamun dusted with pistachio and coconut"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 88vw"
                    className="object-cover object-[center_62%]"
                  />
                </motion.div>
              </ArchFrame>
            </motion.div>

            <motion.figure
              className="absolute -left-[16%] bottom-[-3%] z-20 w-[52%] max-w-[220px] overflow-hidden rounded-full border-[3px] border-marigold"
              style={{ boxShadow: "10px 10px 0 0 #0f7a76" }}
              initial={{ opacity: 0, scale: 0.86, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.35 }}
            >
              <div className="relative aspect-square">
                <Image
                  src="/images/thali.jpg"
                  alt="A Jaipur thali of breads, curries, rice, sweets and lassi"
                  fill
                  priority
                  sizes="230px"
                  className="object-cover"
                />
              </div>
              <figcaption className="sr-only">Jaipur thali</figcaption>
            </motion.figure>

            <motion.figure
              className="absolute -right-[2%] top-[12%] z-20 w-[34%] max-w-[168px] overflow-hidden rounded-full border-[3px] border-ivory"
              style={{ boxShadow: "8px 8px 0 0 #e2186a" }}
              initial={{ opacity: 0, scale: 0.86, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.48 }}
            >
              <div className="relative aspect-square">
                <Image
                  src="/images/jalebi-rabri.jpg"
                  alt="Jalebi in rabri, finished with pistachio and saffron"
                  fill
                  priority
                  sizes="170px"
                  className="object-cover"
                />
              </div>
            </motion.figure>

            <motion.div
              className="absolute top-[32%] left-[16%] z-20 hidden max-w-[11rem] border-l-2 border-marigold bg-ivory px-3 py-2 text-wine lg:block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-rani">
                On the table
              </p>
              <p className="mt-0.5 font-serif text-sm italic leading-snug">
                Gulab jamun, finished with pistachio
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative z-20 max-w-xl lg:col-start-1 lg:row-start-2 lg:max-w-none"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
          >
            <p className="max-w-[26rem] text-base leading-relaxed text-ivory/78 sm:text-lg">
              Sweets, wedding feasts and the long table — Siyaram plates the Pink City for the
              celebrations people remember.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onEnquire}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rani px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-marigold hover:text-wine"
              >
                Plan a celebration
                <ArrowUpRight className="size-4" strokeWidth={1.75} />
              </button>
              <a
                href="#story"
                className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-[0.78rem] font-semibold whitespace-nowrap uppercase tracking-[0.16em] text-ivory/85 transition-colors hover:text-marigold"
              >
                Explore the table
                <ArrowDown
                  className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  strokeWidth={1.75}
                />
              </a>
            </div>

            <dl className="mt-8 grid max-w-sm grid-cols-3 gap-3 border-t border-ivory/15 pt-5">
              {[
                ["01", "Mithai"],
                ["02", "Weddings"],
                ["03", "Kitchens"],
              ].map(([index, label]) => (
                <div key={label}>
                  <dt className="font-serif text-lg italic text-marigold">{index}</dt>
                  <dd className="mt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ivory/70">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      <DishTicker />
    </section>
  );
}

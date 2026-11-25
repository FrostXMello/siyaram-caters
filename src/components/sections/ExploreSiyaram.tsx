"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const destinations = [
  {
    href: "#catering",
    index: "01",
    title: "Catering",
    line: "Weddings, parties and corporate events, planned around your guests.",
    image: "/images/catering/buffet-02.jpg",
    imageAlt: "Siyaram catering buffet counter",
    tone: "bg-rani text-ivory",
    span: "lg:col-span-7 lg:row-span-2 lg:min-h-[34rem]",
    big: true,
  },
  {
    href: "#sweets",
    index: "02",
    title: "Sweets",
    line: "Fresh mithai, made in pure desi ghee near Muhana Mandi.",
    image: "/images/jalebi-rabri.jpg",
    imageAlt: "Jalebi with rabri",
    tone: "bg-marigold text-wine",
    span: "lg:col-span-5 lg:min-h-[17rem]",
  },
  {
    href: "#restaurant",
    index: "03",
    title: "Restaurant",
    line: "Thali, dal bati churma and Rajasthani specials.",
    image: "/images/dalbati.jpg",
    imageAlt: "Dal bati churma",
    tone: "bg-teal text-ivory",
    span: "lg:col-span-5 lg:min-h-[17rem]",
  },
  {
    href: "#venues",
    index: "04",
    title: "Venues",
    line: "Hari Van, Madan Vilas and Siyaram Banquet.",
    image: "/images/gallery/event-04.jpg",
    imageAlt: "Siyaram banquet hall",
    tone: "bg-wine text-ivory",
    span: "lg:col-span-12 lg:min-h-[15rem]",
  },
] as const;

export function ExploreSiyaram() {
  return (
    <section id="explore" className="scroll-mt-20 bg-ivory text-ink">
      <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(2.8rem,6.4vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.045em] lg:col-span-8">
            Four doors,
            <span className="block font-serif font-medium italic tracking-[-0.03em] text-rani">
              one family kitchen.
            </span>
          </h2>
          <p className="max-w-sm self-end text-lg leading-relaxed text-ink/70 lg:col-span-3 lg:col-start-10">
            Pick where you want to begin. Each room of the house has its own table.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto grid grid-cols-[minmax(0,1fr)] max-w-[1440px] gap-px bg-ivory-deep px-0 pb-0 lg:grid-cols-12 lg:px-12 lg:pb-16">
        {destinations.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative flex min-h-[18rem] overflow-hidden ${item.tone} ${item.span}`}
          >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                  "big" in item ? "opacity-50 mix-blend-multiply" : "opacity-30 mix-blend-multiply"
                }`}
              />
              <span className="pointer-events-none absolute -bottom-6 right-4 font-serif text-[9rem] italic leading-none opacity-15">
                {item.index}
              </span>
              <span className="relative flex w-full flex-col justify-between gap-12 p-7 lg:p-9">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] opacity-80">
                  {item.index} · Explore
                </span>
                <span>
                  <span
                    className={`block font-display font-extrabold leading-[0.9] tracking-[-0.04em] ${
                      "big" in item ? "text-[clamp(3.4rem,8vw,7.4rem)]" : "text-[clamp(2.6rem,5vw,4.4rem)]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="mt-4 block max-w-sm text-base leading-relaxed opacity-85">
                    {item.line}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em]">
                    Enter
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

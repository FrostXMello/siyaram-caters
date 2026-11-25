"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type OpeningBandProps = {
  onEnquire: (occasion: string) => void;
};

export function OpeningBand({ onEnquire }: OpeningBandProps) {
  return (
    <section id="story" className="bg-ivory text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-teal">
            The house
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,5.6vw,5.3rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
            Sweets, feasts,
            <span className="mt-1 block font-serif font-medium italic tracking-[-0.03em] text-rani">
              and the city that hosts them.
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9 lg:pt-16">
          Siyaram is a Jaipur kitchen for mithai, weddings and the gatherings in between. Choose a
          room of the house and tell us what you are celebrating.
        </p>
      </div>

      <div className="grid lg:grid-cols-12">
        <button
          id="mithai"
          type="button"
          onClick={() => onEnquire("Mithai order")}
          className="group relative min-h-60 overflow-hidden bg-rani px-7 py-8 text-left text-ivory transition-colors hover:bg-rani-deep lg:col-span-5 lg:min-h-80 lg:px-9"
        >
          <span className="pointer-events-none absolute -right-3 -bottom-8 font-serif text-[8rem] leading-none text-ivory/15 italic">
            01
          </span>
          <span className="relative flex h-full flex-col justify-between gap-10">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-marigold">
              01 · Mithai
            </span>
            <span>
              <span className="block font-display text-4xl font-extrabold tracking-tight lg:text-5xl">
                The sweet finish
              </span>
              <span className="mt-3 block max-w-[16rem] text-sm leading-relaxed text-ivory/80">
                Boxes, bulk orders and the mithai a celebration is remembered by.
              </span>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em]">
                Order mithai
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </span>
          </span>
        </button>

        <button
          id="feasts"
          type="button"
          onClick={() => onEnquire("Wedding feast")}
          className="group relative min-h-60 overflow-hidden text-left text-ivory lg:col-span-4 lg:min-h-80"
        >
          <Image
            src="/images/curry.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-wine via-terracotta/80 to-orange/45" />
          <span className="relative flex h-full min-h-60 flex-col justify-between px-7 py-8 lg:min-h-80 lg:px-8">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-marigold">
              02 · Feasts
            </span>
            <span>
              <span className="block font-display text-4xl font-extrabold tracking-tight">
                The long table
              </span>
              <span className="mt-3 block max-w-[16rem] text-sm leading-relaxed text-ivory/85">
                Wedding menus, live counters and a table set for the whole house.
              </span>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em]">
                Plan a feast
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </span>
          </span>
        </button>

        <button
          id="gatherings"
          type="button"
          onClick={() => onEnquire("Corporate gathering")}
          className="group relative min-h-60 overflow-hidden bg-teal px-7 py-8 text-left text-ivory transition-colors hover:bg-teal-deep lg:col-span-3 lg:min-h-80 lg:px-8"
        >
          <span className="pointer-events-none absolute -right-4 -bottom-6 font-serif text-[7rem] leading-none text-ivory/15 italic">
            03
          </span>
          <span className="relative flex h-full flex-col justify-between gap-10">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-marigold">
              03
            </span>
            <span>
              <span className="block font-display text-4xl font-extrabold tracking-tight">
                Gatherings
              </span>
              <span className="mt-3 block text-sm leading-relaxed text-ivory/80">
                Corporate lunches and private rooms, hosted with the same warmth.
              </span>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em]">
                Host a table
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </span>
          </span>
        </button>
      </div>

      <button
        id="jaipur"
        type="button"
        onClick={() => onEnquire("Private celebration")}
        className="group relative flex min-h-52 w-full items-end overflow-hidden text-left text-ivory lg:min-h-64"
      >
        <Image
          src="/images/hawa.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-gradient-to-r from-wine via-wine/80 to-wine/15" />
        <span className="relative flex w-full max-w-[1440px] flex-col gap-3 px-7 py-8 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-10">
          <span>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-marigold">
              04 · The Pink City
            </span>
            <span className="mt-2 block font-display text-4xl font-extrabold tracking-tight lg:text-6xl">
              Jaipur, in the bones of the kitchen.
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-marigold">
            Celebrate here
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </span>
      </button>
    </section>
  );
}

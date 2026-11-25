"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { stories } from "@/content/stories";

export function StoriesSection() {
  const [lead, ...rest] = stories;

  return (
    <section id="stories" className="scroll-mt-20 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] gap-6 border-t-4 border-wine pt-10 lg:grid-cols-12">
          <h2 className="font-display text-[clamp(3rem,7.6vw,7.2rem)] font-extrabold leading-[0.88] tracking-[-0.05em] lg:col-span-8">
            Stories from
            <span className="block font-serif font-medium italic tracking-[-0.03em] text-teal">
              the Siyaram journal.
            </span>
          </h2>
          <p className="max-w-xs self-end text-base leading-relaxed text-ink/70 lg:col-span-3 lg:col-start-10">
            Menus, sangeet ideas and planning notes for celebrations in Jaipur.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <a
              href={lead.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-wine">
                <Image
                  src={lead.image}
                  alt={lead.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-rani px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory">
                  {lead.tag}
                </span>
              </div>
              <h3 className="mt-6 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-extrabold leading-[0.98] tracking-[-0.04em] group-hover:text-rani">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-xl font-serif text-lg italic leading-snug text-ink/75">
                {lead.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-rani">
                Read the article
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-5 lg:pt-10">
            {rest.map((story, index) => (
              <Reveal key={story.id} delay={0.08 * (index + 1)}>
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[7.5rem_1fr] gap-5 border-b border-wine/15 pb-8 sm:grid-cols-[10rem_1fr]"
                >
                  <div className="relative aspect-[4/3] self-start overflow-hidden bg-wine">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal">
                      {story.tag}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-extrabold leading-tight tracking-tight group-hover:text-rani sm:text-2xl">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{story.excerpt}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

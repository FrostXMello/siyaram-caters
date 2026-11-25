"use client";

import { ArrowUpRight } from "lucide-react";

export function SiteFooter({ onEnquire }: { onEnquire: () => void }) {
  return (
    <footer className="flex flex-col gap-4 bg-wine px-5 py-6 text-ivory sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <p className="font-serif text-xl italic">Siyaram Caters · Jaipur</p>
      <button
        type="button"
        onClick={onEnquire}
        className="inline-flex items-center gap-2 self-start text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-marigold transition-colors hover:text-ivory"
      >
        Enquire on WhatsApp
        <ArrowUpRight className="size-4" strokeWidth={1.75} />
      </button>
    </footer>
  );
}

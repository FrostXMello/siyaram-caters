"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wordmark } from "@/components/brand/Wordmark";
import { navLinks } from "@/lib/site";

type SiteNavProps = {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onEnquire: () => void;
};

export function SiteNav({ menuOpen, onMenuToggle, onEnquire }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !menuOpen ? "border-b border-marigold/35 bg-wine" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="Siyaram Caters, home" className="relative z-50">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-ivory/80 transition-colors hover:text-ivory"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-marigold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="relative z-50 flex items-center gap-2">
            <button
              type="button"
              onClick={onEnquire}
              aria-haspopup="dialog"
              className="hidden rounded-full bg-rani px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-marigold hover:text-wine sm:inline-flex"
            >
              Enquire
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center text-ivory lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={onMenuToggle}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              {menuOpen ? <X strokeWidth={1.75} /> : <Menu strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-x-hidden bg-rani px-6 pt-28 pb-10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onMenuToggle}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
                  className="font-display text-[clamp(2.15rem,9.2vw,4.5rem)] leading-[0.92] font-extrabold tracking-tight text-ivory"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <button
              type="button"
              onClick={onEnquire}
              className="inline-flex items-center justify-center rounded-full bg-wine px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-marigold"
            >
              Plan a celebration
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

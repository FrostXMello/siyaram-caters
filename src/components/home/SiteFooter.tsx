"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { contact } from "@/content/contact";

const footerLinks = [
  { href: "#story", label: "Our story" },
  { href: "#catering", label: "Catering" },
  { href: "#sweets", label: "Sweets" },
  { href: "#restaurant", label: "Restaurant" },
  { href: "#venues", label: "Venues" },
  { href: "#events", label: "Events" },
  { href: "#areas", label: "Areas" },
  { href: "#gallery", label: "Gallery" },
  { href: "#voices", label: "Voices" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteFooter({ onEnquire }: { onEnquire: () => void }) {
  return (
    <footer className="bg-wine text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
        <div className="lg:col-span-5">
          <Wordmark />
          <p className="mt-6 max-w-sm font-serif text-2xl italic leading-snug text-ivory/90">
            {contact.tagline}.
          </p>
          <button
            type="button"
            onClick={onEnquire}
            className="mt-8 inline-flex items-center gap-2 bg-marigold px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-wine transition-colors hover:bg-ivory"
          >
            Enquire on WhatsApp
            <ArrowUpRight className="size-4" strokeWidth={1.9} />
          </button>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-marigold">
            Explore
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm lg:grid-cols-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ivory/80 transition-colors hover:text-marigold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-marigold">
            Visit &amp; reach us
          </p>
          <address className="mt-5 flex flex-col gap-4 text-sm not-italic text-ivory/80">
            <a
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-marigold"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-rani" strokeWidth={1.8} />
              <span>
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </a>
            <a
              href={`tel:${contact.phoneTel}`}
              className="flex items-center gap-3 transition-colors hover:text-marigold"
            >
              <Phone className="size-4 shrink-0 text-rani" strokeWidth={1.8} />
              {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 break-all transition-colors hover:text-marigold"
            >
              <Mail className="size-4 shrink-0 text-rani" strokeWidth={1.8} />
              {contact.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© Siyaram Caters · Jaipur</p>
          <p>Caterer · Sweets · Chaat · Restaurant</p>
        </div>
      </div>
    </footer>
  );
}

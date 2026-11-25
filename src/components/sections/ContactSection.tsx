"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { JaaliPattern } from "@/components/patterns/JaaliPattern";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/content/contact";

type ContactSectionProps = {
  onEnquire?: (occasion?: string) => void;
};

const whatsappLink = `https://wa.me/${contact.phoneWhatsApp}?text=${encodeURIComponent(
  "Namaste Siyaram, I would like to plan a celebration.",
)}`;

const enquiryChoices = [
  { label: "Wedding feast", occasion: "Wedding feast" },
  { label: "Mithai order", occasion: "Mithai order" },
  { label: "Corporate gathering", occasion: "Corporate gathering" },
  { label: "Private celebration", occasion: "Private celebration" },
] as const;

export function ContactSection({ onEnquire }: ContactSectionProps) {
  const rows = [
    { icon: Phone, label: "Call", value: contact.phoneDisplay, href: `tel:${contact.phoneTel}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappLink, external: true },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, wide: true },
    { icon: MapPin, label: "Find us", value: "Open in Maps", href: contact.mapUrl, external: true },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-ivory text-ink">
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)] max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:px-12 lg:py-28">
        <div className="lg:col-span-7 lg:pr-16">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-teal">
              Contact
            </p>
            <h2 className="mt-4 font-display text-[clamp(3rem,7vw,6.8rem)] font-extrabold leading-[0.86] tracking-[-0.055em]">
              Let’s set
              <span className="block font-serif font-medium italic tracking-[-0.03em] text-rani">
                the table.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
              {contact.tagline}. Call or WhatsApp us and tell us what you are celebrating — we will
              talk through the menu and give you a clear quote.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-px bg-wine/15 sm:grid-cols-2">
            {rows.map((row, index) => (
              <Reveal key={row.label} delay={0.06 * index} className={"wide" in row && row.wide ? "sm:col-span-2" : ""}>
                <div className="h-full bg-ivory">
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full items-start gap-4 bg-paper p-5 transition-colors hover:bg-marigold"
                  >
                    <row.icon className="mt-1 size-5 shrink-0 text-rani group-hover:text-wine" strokeWidth={1.8} />
                    <span className="min-w-0">
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink/55">
                        {row.label}
                      </span>
                      <span className="mt-1 block break-words font-display text-lg font-extrabold tracking-tight">
                        {row.value}
                      </span>
                    </span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <address className="mt-8 border-l-4 border-marigold pl-5 font-serif text-lg not-italic leading-snug text-ink/80">
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink/55">
              Siyaram Caters
            </span>
            {contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="relative h-full overflow-hidden bg-wine p-7 text-ivory sm:p-10">
            <JaaliPattern />
            <div className="relative">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-marigold">
                Start an enquiry
              </p>
              <h3 className="mt-3 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.04em]">
                What are we{" "}
                <span className="font-serif font-medium italic text-rani">planning?</span>
              </h3>
              <div className="mt-8 flex flex-col gap-3">
                {enquiryChoices.map((choice, index) => (
                  <button
                    key={choice.label}
                    type="button"
                    onClick={() => onEnquire?.(choice.occasion)}
                    className={`group flex items-center justify-between px-5 py-4 text-left font-display text-lg font-extrabold tracking-tight transition-colors ${
                      index % 2 === 0
                        ? "bg-rani hover:bg-rani-deep"
                        : "bg-wine-raised hover:bg-burgundy"
                    }`}
                  >
                    {choice.label}
                    <span className="font-serif text-2xl italic text-marigold transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton tone="marigold" href={`tel:${contact.phoneTel}`}>
                  Call now
                </CtaButton>
                <CtaButton tone="outline" href={whatsappLink} external>
                  WhatsApp
                </CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

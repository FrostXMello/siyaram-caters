"use client";

import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { contact } from "@/content/contact";
import {
  buildEnquiryMessage,
  occasions,
  whatsappHref,
  type EnquiryInput,
  type Occasion,
} from "@/lib/site";

type EnquiryDrawerProps = {
  open: boolean;
  occasion?: string;
  onClose: () => void;
};

const emptyForm: EnquiryInput = {
  name: "",
  phone: "",
  email: "",
  occasion: "Wedding feast",
  date: "",
  guests: "",
  location: "",
  note: "",
};

export function EnquiryDrawer({ open, occasion, onClose }: EnquiryDrawerProps) {
  const titleId = useId();
  const [form, setForm] = useState<EnquiryInput>(emptyForm);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sentHref, setSentHref] = useState<string | null>(null);
  const [seenOpen, setSeenOpen] = useState(open);
  const [seenOccasion, setSeenOccasion] = useState(occasion);

  if (open !== seenOpen || occasion !== seenOccasion) {
    setSeenOpen(open);
    setSeenOccasion(occasion);
    if (open) {
      setSentHref(null);
      if (occasion) {
        setForm((current) => ({ ...current, occasion }));
      }
    }
  }

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      document.getElementById("enquiry-name")?.focus();
    }, 280);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, occasion, onClose]);

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors: { name?: string; phone?: string } = {};
    if (!form.name.trim()) nextErrors.name = "Add your name.";
    if (!/^[0-9+\s()-]{8,}$/.test(form.phone.trim())) {
      nextErrors.phone = "Add a phone number.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const href = whatsappHref(buildEnquiryMessage(form));
    setSentHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close enquiry"
            className="fixed inset-0 z-[60] bg-ink/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed top-0 right-0 z-[70] flex h-dvh w-full max-w-[100vw] flex-col overflow-x-hidden border-l-[3px] border-marigold bg-paper sm:max-w-[28rem]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-wine px-6 py-6 text-ivory">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-marigold">
                Siyaram · Jaipur
              </p>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h2
                  id={titleId}
                  className="min-w-0 font-display text-[2rem] leading-[0.9] font-extrabold tracking-tight sm:text-[2.4rem]"
                >
                  Plan a celebration
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="grid size-10 shrink-0 place-items-center text-ivory transition-colors hover:text-marigold"
                >
                  <X strokeWidth={1.75} />
                </button>
              </div>
            </div>

            {sentHref ? (
              <div className="flex flex-1 flex-col justify-between px-6 py-8">
                <div>
                  <p className="font-serif text-3xl italic leading-tight text-ink">
                    Your note is ready on WhatsApp.
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
                    It opens a chat with Siyaram on {contact.phoneDisplay}, with your enquiry
                    written out and ready to send.
                  </p>
                </div>
                <a
                  href={sentHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-teal-deep"
                >
                  <MessageCircle className="size-4" strokeWidth={1.75} />
                  Open WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
                <label className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-deep" htmlFor="enquiry-name">
                  Name
                </label>
                <input
                  id="enquiry-name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  className="w-full border-b border-wine/20 bg-transparent py-3 font-serif text-2xl text-ink outline-none placeholder:text-ink/30 focus:border-rani"
                  placeholder="Your name"
                />
                {errors.name ? <p className="mt-1 text-sm text-rani">{errors.name}</p> : null}

                <label className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-deep" htmlFor="enquiry-phone">
                  Phone
                </label>
                <input
                  id="enquiry-phone"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                  aria-invalid={Boolean(errors.phone)}
                  className="w-full border-b border-wine/20 bg-transparent py-3 font-serif text-2xl text-ink outline-none placeholder:text-ink/30 focus:border-rani"
                  placeholder="98XX XXX XXX"
                />
                {errors.phone ? <p className="mt-1 text-sm text-rani">{errors.phone}</p> : null}

                <label className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-deep" htmlFor="enquiry-email">
                  Email <span className="font-sans normal-case tracking-normal text-ink/40">(optional)</span>
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  autoComplete="email"
                  className="w-full border-b border-wine/20 bg-transparent py-3 font-serif text-xl text-ink outline-none placeholder:text-ink/30 focus:border-rani"
                  placeholder="you@email.com"
                />

                <fieldset className="mt-7">
                  <legend className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-deep">
                    Occasion
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {occasions.map((item) => {
                      const selected = form.occasion === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => update("occasion", item as Occasion)}
                          className={`rounded-full px-3.5 py-2 text-[0.75rem] font-semibold tracking-wide transition-colors ${
                            selected
                              ? "bg-wine text-ivory"
                              : "border border-wine/15 text-wine hover:border-rani hover:text-rani"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-deep" htmlFor="enquiry-date">
                      Date
                    </label>
                    <input
                      id="enquiry-date"
                      type="date"
                      value={form.date}
                      onChange={(event) => update("date", event.target.value)}
                      className="w-full border-b border-wine/20 bg-transparent py-3 text-sm text-ink outline-none focus:border-rani"
                    />
                  </div>
                  <div>
                    <label className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-deep" htmlFor="enquiry-guests">
                      Guests
                    </label>
                    <input
                      id="enquiry-guests"
                      inputMode="numeric"
                      value={form.guests}
                      onChange={(event) => update("guests", event.target.value)}
                      className="w-full border-b border-wine/20 bg-transparent py-3 font-serif text-2xl text-ink outline-none placeholder:text-ink/30 focus:border-rani"
                      placeholder="120"
                    />
                  </div>
                </div>

                <label className="mt-7 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-deep" htmlFor="enquiry-location">
                  Venue / area <span className="font-sans normal-case tracking-normal text-ink/40">(optional)</span>
                </label>
                <input
                  id="enquiry-location"
                  value={form.location}
                  onChange={(event) => update("location", event.target.value)}
                  className="w-full border-b border-wine/20 bg-transparent py-3 font-serif text-xl text-ink outline-none placeholder:text-ink/30 focus:border-rani"
                  placeholder="Hari Van, Mansarovar…"
                />

                <label className="mt-7 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-deep" htmlFor="enquiry-note">
                  Note
                </label>
                <textarea
                  id="enquiry-note"
                  value={form.note}
                  onChange={(event) => update("note", event.target.value)}
                  rows={3}
                  className="mt-2 w-full resize-none border-b border-wine/20 bg-transparent py-3 font-serif text-lg text-ink outline-none placeholder:text-ink/30 focus:border-rani"
                  placeholder="A wedding in the family, a box of ghewar…"
                />

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-rani px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-wine"
                >
                  <MessageCircle className="size-4" strokeWidth={1.75} />
                  Continue on WhatsApp
                </button>
                <p className="mt-4 text-xs leading-relaxed text-ink/55">
                  Opens WhatsApp with {contact.phoneDisplay} and this note ready to send.
                </p>
              </form>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

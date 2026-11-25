import { contact } from "@/content/contact";

export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#catering", label: "Catering" },
  { href: "#sweets", label: "Sweets" },
  { href: "#restaurant", label: "Restaurant" },
  { href: "#venues", label: "Venues" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export const tickerItems = [
  "Gulab jamun",
  "Ghewar",
  "Kaju katli",
  "Dal baati",
  "Wedding thalis",
  "Live chaat",
  "Saffron kheer",
  "Motichoor laddoo",
  "Corporate feasts",
  "Pink City hospitality",
] as const;

export const occasions = [
  "Mithai order",
  "Wedding feast",
  "Marriage party",
  "Theme party",
  "Anniversary",
  "Corporate gathering",
  "Venue party",
  "Restaurant / group dining",
  "Private celebration",
] as const;

export type Occasion = (typeof occasions)[number];

export type EnquiryInput = {
  name: string;
  phone: string;
  email: string;
  occasion: Occasion | string;
  date: string;
  guests: string;
  location: string;
  note: string;
};

export function buildEnquiryMessage(input: EnquiryInput) {
  const lines = [
    "Namaste Siyaram,",
    "",
    "I would like to plan a celebration.",
    `Name: ${input.name.trim()}`,
    `Phone: ${input.phone.trim()}`,
  ];

  if (input.email.trim()) lines.push(`Email: ${input.email.trim()}`);
  lines.push(`Occasion: ${input.occasion}`);
  if (input.date) lines.push(`Date: ${input.date}`);
  if (input.guests) lines.push(`Guests: ${input.guests}`);
  if (input.location.trim()) lines.push(`Venue / area: ${input.location.trim()}`);
  if (input.note.trim()) lines.push(`Note: ${input.note.trim()}`);

  lines.push("", "— Sent from the Siyaram website");
  return lines.join("\n");
}

export function whatsappHref(message: string) {
  return `https://api.whatsapp.com/send?phone=${contact.phoneWhatsApp}&text=${encodeURIComponent(message)}`;
}

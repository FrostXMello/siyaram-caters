export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#mithai", label: "Mithai" },
  { href: "#feasts", label: "Feasts" },
  { href: "#gatherings", label: "Gatherings" },
  { href: "#jaipur", label: "Jaipur" },
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
  "Corporate gathering",
  "Private celebration",
] as const;

export type Occasion = (typeof occasions)[number];

export type EnquiryInput = {
  name: string;
  phone: string;
  occasion: Occasion | string;
  date: string;
  guests: string;
  note: string;
};

export function buildEnquiryMessage(input: EnquiryInput) {
  const lines = [
    "Namaste Siyaram,",
    "",
    "I would like to plan a celebration.",
    `Name: ${input.name.trim()}`,
    `Phone: ${input.phone.trim()}`,
    `Occasion: ${input.occasion}`,
  ];

  if (input.date) lines.push(`Date: ${input.date}`);
  if (input.guests) lines.push(`Guests: ${input.guests}`);
  if (input.note.trim()) lines.push(`Note: ${input.note.trim()}`);

  lines.push("", "— Sent from the Siyaram website");
  return lines.join("\n");
}

export function whatsappHref(message: string) {
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}

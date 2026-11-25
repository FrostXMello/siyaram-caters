export type CateringService = {
  id: string;
  title: string;
  /** Short, factual summary paraphrased from the Siyaram services page. */
  summary: string;
  /** Matching enquiry occasion string. */
  occasion: string;
};

export const cateringServices: readonly CateringService[] = [
  {
    id: "catering",
    title: "Catering",
    summary:
      "Indoor and outdoor catering planned so the host stays comfortable and stress-free.",
    occasion: "Wedding feast",
  },
  {
    id: "wedding-catering",
    title: "Wedding catering",
    summary:
      "Food for the wedding and the functions around it — good food and a wedding go hand in hand.",
    occasion: "Wedding feast",
  },
  {
    id: "marriage-parties",
    title: "Marriage parties",
    summary:
      "Careful arrangements and food quality, served in the most cost-effective way we can.",
    occasion: "Wedding feast",
  },
  {
    id: "theme-parties",
    title: "Theme parties",
    summary: "Menus and cuisine shaped around the mood and theme of the party.",
    occasion: "Private celebration",
  },
  {
    id: "anniversary-parties",
    title: "Anniversary parties",
    summary: "Great food for your guests, because the day is yours.",
    occasion: "Private celebration",
  },
  {
    id: "corporate-catering",
    title: "Corporate event catering",
    summary:
      "Hygienic food prepared under an experienced chef, served efficiently for the corporate world.",
    occasion: "Corporate gathering",
  },
  {
    id: "venue-parties",
    title: "Venue parties",
    summary: "Catering for parties held at venues across Jaipur, including Siyaram’s own banquet.",
    occasion: "Private celebration",
  },
  {
    id: "event-services",
    title: "Event services",
    summary: "Setup, service and cleanup handled by our team, so you can stay with your guests.",
    occasion: "Private celebration",
  },
  {
    id: "crockery-services",
    title: "Crockery services",
    summary: "Plates, spoons and serving ware arranged along with the food.",
    occasion: "Wedding feast",
  },
];

export type WeddingFunction = {
  id: string;
  title: string;
  note: string;
};

export const weddingFunctions: readonly WeddingFunction[] = [
  { id: "engagement", title: "Engagement", note: "The first celebration of the season." },
  { id: "sangeet", title: "Sangeet", note: "Music, dance and a table that keeps up." },
  { id: "mehendi", title: "Mehendi", note: "Long, relaxed afternoons with food that keeps coming." },
  { id: "reception", title: "Reception", note: "The closing feast, served with care." },
];

export type EventItem = {
  id: string;
  label: string;
  headline: string;
  copy: string;
  image: string;
  imageAlt: string;
  /** Enquiry occasion string passed to onEnquire. */
  occasion: string;
  cta: string;
};

export const eventItems: readonly EventItem[] = [
  {
    id: "weddings",
    label: "Weddings",
    headline: "From engagement to reception.",
    copy: "Engagement, sangeet, mehendi and the wedding itself — one kitchen looking after every function’s food.",
    image: "/images/gallery/event-03.jpg",
    imageAlt: "Banquet hall set for a wedding, from the Siyaram event gallery",
    occasion: "Wedding feast",
    cta: "Plan a wedding feast",
  },
  {
    id: "family-gatherings",
    label: "Family gatherings",
    headline: "Food that feels like home.",
    copy: "Housewarmings, birthdays and get-togethers, with menus built around what your family loves to eat.",
    image: "/images/catering/buffet-03.jpg",
    imageAlt: "Siyaram catering buffet counter with serving staff",
    occasion: "Private celebration",
    cta: "Plan a family gathering",
  },
  {
    id: "corporate",
    label: "Corporate events",
    headline: "Professional, on time, hygienic.",
    copy: "Office openings and corporate gatherings, served efficiently under the supervision of an experienced chef.",
    image: "/images/catering/buffet-06.jpg",
    imageAlt: "Siyaram catering setup for an event",
    occasion: "Corporate gathering",
    cta: "Enquire for a corporate event",
  },
  {
    id: "anniversaries",
    label: "Anniversaries",
    headline: "Your day, your table.",
    copy: "From a small family dinner to a milestone celebration — with special counters arranged when guests need them.",
    image: "/images/gallery/event-04.jpg",
    imageAlt: "Decorated banquet space from the Siyaram event gallery",
    occasion: "Private celebration",
    cta: "Plan an anniversary",
  },
  {
    id: "theme-parties",
    label: "Theme parties",
    headline: "Menus that match the mood.",
    copy: "Tell us the theme and we will shape the cuisine and the menu around it.",
    image: "/images/catering/buffet-04.jpg",
    imageAlt: "Colourful decorated party space with Siyaram catering",
    occasion: "Private celebration",
    cta: "Plan a theme party",
  },
  {
    id: "cocktail",
    label: "Cocktail catering",
    headline: "Evenings with something to hold.",
    copy: "Cocktail-style catering for evening gatherings. Talk to us about the menu and service you have in mind.",
    image: "/images/catering/buffet-01.jpg",
    imageAlt: "Illuminated buffet counters at an evening Siyaram catering setup",
    occasion: "Private celebration",
    cta: "Enquire about cocktail catering",
  },
  {
    id: "private",
    label: "Private celebrations",
    headline: "Small tables, same care.",
    copy: "Intimate occasions get the same menu planning, service and cleanup as the big ones.",
    image: "/images/catering/buffet-02.jpg",
    imageAlt: "Siyaram buffet counter with chafing dishes and live service",
    occasion: "Private celebration",
    cta: "Plan a private celebration",
  },
];

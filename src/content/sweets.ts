export type SweetCategory = "Barfi & dry fruit" | "Laddu & festive" | "Syrup sweets" | "Namkeen";

export const sweetCategories: readonly ("All" | SweetCategory)[] = [
  "All",
  "Barfi & dry fruit",
  "Laddu & festive",
  "Syrup sweets",
  "Namkeen",
];

export type Sweet = {
  id: string;
  name: string;
  category: SweetCategory;
  tagline: string;
  description: string;
  /** Requested product image. */
  image: string;
  /** Existing local image used if the requested file is not present. */
  fallbackImage: string;
  /** Optional line items (used for Namkeen). */
  items?: readonly string[];
};

export const sweets: readonly Sweet[] = [
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    category: "Barfi & dry fruit",
    tagline: "Our best seller",
    description: "Thin, smooth and made with real cashews — made to melt in the mouth.",
    image: "/images/kaju.jpg",
    fallbackImage: "/images/gallery/event-15.jpg",
  },
  {
    id: "mawa-laddu",
    name: "Mawa Laddu",
    category: "Laddu & festive",
    tagline: "Fresh mawa, every morning",
    description: "Soft and rich, made with mawa prepared in-house each morning.",
    image: "/images/catering/buffet-03.jpg",
    fallbackImage: "/images/gulab.jpg",
  },
  {
    id: "ghewar",
    name: "Ghewar",
    category: "Laddu & festive",
    tagline: "A monsoon favourite",
    description:
      "Made in the monsoon season — regulars start asking from July whether ghewar has begun.",
    image: "/images/jalebi-rabri.jpg",
    fallbackImage: "/images/jalebi-rabri.jpg",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "Syrup sweets",
    tagline: "Warm and soft",
    description: "Soaked in sugar syrup — not too sweet, not too bland.",
    image: "/images/gulab.jpg",
    fallbackImage: "/images/jalebi-rabri.jpg",
  },
  {
    id: "rasgulla",
    name: "Rasgulla",
    category: "Syrup sweets",
    tagline: "Spongy and light",
    description: "A sweet for kids and adults alike.",
    image: "/images/rasgulla.jpg",
    fallbackImage: "/images/gulab.jpg",
  },
  {
    id: "dry-fruit-barfi",
    name: "Dry Fruit Barfi",
    category: "Barfi & dry fruit",
    tagline: "Made for gifting",
    description: "Loaded with badam, pista and cashew — a premium box for giving.",
    image: "/images/catering/buffet-01.jpg",
    fallbackImage: "/images/kaju.jpg",
  },
  {
    id: "namkeen",
    name: "Namkeen",
    category: "Namkeen",
    tagline: "Perfect with chai",
    description: "Fresh savouries to go with an evening cup of chai.",
    image: "/images/chaat.jpg",
    fallbackImage: "/images/chaat.jpg",
    items: ["Mathri", "Mixture", "Bhujia"],
  },
];

export type SweetOccasion = {
  id: string;
  title: string;
  note: string;
  /** Enquiry occasion string. */
  occasion: string;
};

export const sweetOccasions: readonly SweetOccasion[] = [
  { id: "diwali", title: "Diwali", note: "Festival boxes for the season of gifting.", occasion: "Mithai order" },
  { id: "rakhi", title: "Rakhi", note: "Sweet boxes for the thread-tying day.", occasion: "Mithai order" },
  { id: "holi", title: "Holi", note: "Fresh mithai for the festival of colours.", occasion: "Mithai order" },
  {
    id: "wedding",
    title: "Wedding sweets",
    note: "Bulk orders with custom packing carrying your name.",
    occasion: "Mithai order",
  },
  {
    id: "bulk",
    title: "Bulk orders",
    note: "Give us 2–3 days’ notice for big orders and everything is made fresh.",
    occasion: "Mithai order",
  },
  {
    id: "custom-boxes",
    title: "Custom boxes",
    note: "From simple mithai boxes to dry fruit sweet combos.",
    occasion: "Mithai order",
  },
  {
    id: "prasad",
    title: "Prasad boxes",
    note: "Fresh, clean and properly packed for pujas at home.",
    occasion: "Mithai order",
  },
  {
    id: "corporate",
    title: "Corporate gifting",
    note: "Boxes for offices and clients, in different budgets.",
    occasion: "Mithai order",
  },
];

export const sweetClaims = [
  { title: "Fresh daily", text: "The halwai starts at 4 AM. What is in the display was made that day." },
  { title: "Pure desi ghee", text: "Real desi ghee and in-house mawa — no shortcuts, no cheap substitutes." },
  { title: "Family recipes", text: "Passed down in the family and tested over decades." },
  { title: "Near Muhana Mandi", text: "One shop, near Muhana Mandi, open every day." },
] as const;

export const sweetsFeatureImage = "/images/jalebi-rabri.jpg";

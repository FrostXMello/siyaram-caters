export type MenuCategory = {
  id: string;
  name: string;
  blurb: string;
  items: readonly string[];
  image: string;
  imageAlt: string;
};

export const menuCategories: readonly MenuCategory[] = [
  {
    id: "thali",
    name: "Thali",
    blurb:
      "What most people order: a full meal made fresh that day, with a sweet to finish.",
    items: ["Dal", "Sabzi", "Roti", "Rice", "Raita", "Papad", "A sweet"],
    image: "/images/thali.jpg",
    imageAlt: "Vegetarian thali from the Siyaram restaurant",
  },
  {
    id: "dal-bati-churma",
    name: "Dal Bati Churma",
    blurb:
      "Bati cooked over real coal, real desi ghee on top, and sweet, crunchy churma.",
    items: ["Dal", "Coal-cooked bati", "Desi ghee", "Churma"],
    image: "/images/thali.jpg",
    imageAlt: "Rajasthani meal with breads, dal and accompaniments",
  },
  {
    id: "paneer",
    name: "Paneer dishes",
    blurb: "Made with fresh paneer, not the packaged kind.",
    items: ["Butter paneer", "Kadhai paneer", "Palak paneer", "Shahi paneer"],
    image: "/images/paneer.jpg",
    imageAlt: "Paneer curry",
  },
  {
    id: "rajasthani",
    name: "Rajasthani specials",
    blurb: "The dishes that feel like home if you are from Rajasthan.",
    items: ["Gatte ki sabzi", "Ker sangri", "Papad ki sabzi", "Besan ki chakki"],
    image: "/images/rajasthani.jpg",
    imageAlt: "Rajasthani dishes",
  },
  {
    id: "snacks-chaat",
    name: "Snacks & chaat",
    blurb: "Hot and fresh, for when you only want something quick.",
    items: ["Samosa", "Kachori", "Pav bhaji", "Chole bhature"],
    image: "/images/chaat.jpg",
    imageAlt: "Chaat and snacks",
  },
  {
    id: "breads",
    name: "Breads",
    blurb: "All made to order, not stacked and kept for hours.",
    items: ["Tandoori roti", "Butter naan", "Missi roti", "Lachha paratha"],
    image: "/images/naan.jpg",
    imageAlt: "Freshly made Indian breads",
  },
];

export const restaurantFacts = [
  "Open for lunch and dinner, with morning snacks too",
  "Vegetables from Muhana Mandi every morning",
  "No reservations needed — walk in",
  "Parking space available",
] as const;

export const restaurantAccentImage = "/images/curry.jpg";

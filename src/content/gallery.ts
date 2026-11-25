export type GalleryCategory = "catering" | "weddings" | "food" | "sweets" | "celebrations";

export const galleryFilters: readonly { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "catering", label: "Catering" },
  { id: "weddings", label: "Weddings" },
  { id: "food", label: "Food" },
  { id: "sweets", label: "Sweets" },
  { id: "celebrations", label: "Celebrations" },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Layout hint for the asymmetric masonry. */
  shape: "wide" | "tall" | "square";
};

const catering = (n: number, shape: GalleryItem["shape"] = "wide"): GalleryItem => ({
  id: `buffet-${n}`,
  src: `/images/catering/buffet-0${n}.jpg`,
  alt: "Siyaram catering setup, from the business gallery",
  category: "catering",
  shape,
});

export const galleryItems: readonly GalleryItem[] = [
  catering(1),
  {
    id: "event-03",
    src: "/images/gallery/event-03.jpg",
    alt: "Wedding banquet hall photographed at the Siyaram event space",
    category: "weddings",
    shape: "wide",
  },
  {
    id: "thali",
    src: "/images/thali.jpg",
    alt: "Vegetarian thali from the Siyaram restaurant",
    category: "food",
    shape: "tall",
  },
  catering(2),
  {
    id: "event-15",
    src: "/images/gallery/event-15.jpg",
    alt: "Tray of dry fruit mithai from the Siyaram sweet shop",
    category: "sweets",
    shape: "square",
  },
  {
    id: "event-07",
    src: "/images/gallery/event-07.jpg",
    alt: "Courtyard and pool at the Siyaram event space, from the business gallery",
    category: "celebrations",
    shape: "wide",
  },
  {
    id: "dalbati",
    src: "/images/dalbati.jpg",
    alt: "Dal bati churma from the Siyaram restaurant",
    category: "food",
    shape: "wide",
  },
  catering(3),
  {
    id: "event-04",
    src: "/images/gallery/event-04.jpg",
    alt: "Decorated banquet hall with chandeliers, from the Siyaram event gallery",
    category: "weddings",
    shape: "wide",
  },
  {
    id: "jalebi-rabri",
    src: "/images/jalebi-rabri.jpg",
    alt: "Jalebi with rabri from Siyaram sweets",
    category: "sweets",
    shape: "wide",
  },
  catering(4),
  {
    id: "event-14",
    src: "/images/gallery/event-14.jpg",
    alt: "Siyaram sweet shop counter, from the business gallery",
    category: "sweets",
    shape: "wide",
  },
  {
    id: "chaat",
    src: "/images/chaat.jpg",
    alt: "Chaat from the Siyaram restaurant",
    category: "food",
    shape: "wide",
  },
  {
    id: "event-01",
    src: "/images/gallery/event-01.jpg",
    alt: "Front of the Siyaram Caters building, from the business gallery",
    category: "celebrations",
    shape: "wide",
  },
  catering(5),
  {
    id: "event-06",
    src: "/images/gallery/event-06.jpg",
    alt: "Stage end of the banquet hall, from the Siyaram event gallery",
    category: "weddings",
    shape: "wide",
  },
  {
    id: "gulab",
    src: "/images/gulab.jpg",
    alt: "Gulab jamun from Siyaram sweets",
    category: "sweets",
    shape: "tall",
  },
  catering(6),
  {
    id: "event-10",
    src: "/images/gallery/event-10.jpg",
    alt: "Pool-side arches at the Siyaram event space, from the business gallery",
    category: "celebrations",
    shape: "wide",
  },
  {
    id: "paneer",
    src: "/images/paneer.jpg",
    alt: "Paneer curry from the Siyaram restaurant",
    category: "food",
    shape: "wide",
  },
  catering(7),
  catering(8),
  {
    id: "event-16",
    src: "/images/gallery/event-16.jpg",
    alt: "Inside the Siyaram sweet shop, from the business gallery",
    category: "sweets",
    shape: "wide",
  },
];

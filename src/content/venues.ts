export type Venue = {
  id: string;
  name: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Source images are small PNGs; mark them so layouts do not stretch them full-bleed. */
  lowRes?: boolean;
  occasion: string;
};

export const venues: readonly Venue[] = [
  {
    id: "hari-van",
    name: "Hari Van",
    intro: "A venue in Jaipur where Siyaram caters weddings and parties.",
    image: "/images/venues/hari-van.png",
    imageAlt: "Hari Van venue",
    lowRes: true,
    occasion: "Wedding feast",
  },
  {
    id: "madan-vilas",
    name: "Madan Vilas",
    intro: "A venue in Jaipur for celebrations, with Siyaram’s catering and event services.",
    image: "/images/venues/madan-vilas.png",
    imageAlt: "Madan Vilas venue",
    lowRes: true,
    occasion: "Private celebration",
  },
  {
    id: "siyaram-banquet",
    name: "Siyaram Banquet",
    intro: "Siyaram’s own banquet space — host the function and the feast under one name.",
    image: "/images/gallery/event-05.jpg",
    imageAlt: "Interior of the Siyaram banquet hall, from the business gallery",
    occasion: "Wedding feast",
  },
];

export const venuePoolImage = "/images/gallery/event-07.jpg";
export const venuePoolAlt = "Courtyard and pool at the Siyaram event space, from the business gallery";

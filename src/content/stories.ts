export type Story = {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  image: string;
  imageAlt: string;
  tag: string;
};

export const stories: readonly Story[] = [
  {
    id: "wedding-menu",
    title: "Traditional Rajasthani Wedding Menu 2026",
    excerpt:
      "From dal baati churma and gatte ki sabzi to ker sangri and ghevar — the classics every Rajasthani menu needs, with a sample wedding menu structure.",
    url: "https://siyaramcaters.com/2026/10/06/traditional-rajasthani-wedding-menu-2026/",
    image: "/images/stories/wedding-menu.jpg",
    imageAlt: "Cover image for the article on traditional Rajasthani wedding menus",
    tag: "Menu",
  },
  {
    id: "ghoomar",
    title: "Ghoomar Dance Ideas for Sangeet 2026",
    excerpt:
      "Ten Rajasthani folk performance ideas for your sangeet, from a bride’s solo ghoomar to Kalbeliya and Manganiyar acts.",
    url: "https://siyaramcaters.com/2026/10/05/ghoomar-dance-ideas-for-sangeet-2026/",
    image: "/images/stories/ghoomar.jpg",
    imageAlt: "Cover image for the article on ghoomar dance ideas for sangeet",
    tag: "Sangeet",
  },
  {
    id: "venues-guide",
    title: "Best Wedding Venues in Jaipur 2026",
    excerpt:
      "A guide to ten wedding venues in Jaipur — palaces and heritage hotels — with a venue cost comparison.",
    url: "https://siyaramcaters.com/2026/10/03/best-wedding-venues-in-jaipur-2026/",
    image: "/images/stories/venues-guide.jpg",
    imageAlt: "Cover image for the article on the best wedding venues in Jaipur",
    tag: "Venues",
  },
  {
    id: "catering-mistakes",
    title: "Planning an Event in Jaipur? Avoid These 5 Catering Mistakes",
    excerpt:
      "Five common catering mistakes to steer clear of when planning an event in Jaipur.",
    url: "https://siyaramcaters.com/2025/09/19/planning-an-event-in-jaipur-avoid-these-5-catering-mistakes/",
    image: "/images/stories/catering-mistakes.jpg",
    imageAlt: "Cover image for the article on catering mistakes to avoid",
    tag: "Planning",
  },
];

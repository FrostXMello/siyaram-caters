export type ServiceArea = {
  id: string;
  name: string;
  /** Stylised map position, percent of the map canvas. Not geographic coordinates. */
  x: number;
  y: number;
  /** Local landing page on the existing Siyaram website, if there is one. */
  url?: string;
  /** Short factual note shown when the area is selected. */
  note?: string;
};

export const serviceAreas: readonly ServiceArea[] = [
  {
    id: "muhana-mandi",
    name: "Muhana Mandi",
    x: 47,
    y: 66,
    note: "Sweet shop and restaurant",
    url: "https://siyaramcaters.com/catering-services-in-muhana-mandi/",
  },
  { id: "mansarovar", name: "Mansarovar", x: 28, y: 52 },
  {
    id: "vaishali-nagar",
    name: "Vaishali Nagar",
    x: 17,
    y: 28,
    url: "https://siyaramcaters.com/catering-services-in-vaishali-nagar/",
  },
  {
    id: "raja-park",
    name: "Raja Park",
    x: 60,
    y: 22,
    url: "https://siyaramcaters.com/catering-services-in-raja-park/",
  },
  {
    id: "malviya-nagar",
    name: "Malviya Nagar",
    x: 42,
    y: 40,
    url: "https://siyaramcaters.com/catering-services-in-malviya-nagar/",
  },
  { id: "c-scheme", name: "C-Scheme", x: 52, y: 12 },
  {
    id: "jagatpura",
    name: "Jagatpura",
    x: 80,
    y: 54,
    url: "https://siyaramcaters.com/catering-services-in-jagatpura/",
  },
  { id: "tonk-road", name: "Tonk Road", x: 56, y: 48 },
  { id: "sanganer", name: "Sanganer", x: 62, y: 80, note: "Catering office" },
  { id: "pratap-nagar", name: "Pratap Nagar", x: 36, y: 74 },
  { id: "gopalpura", name: "Gopalpura", x: 35, y: 30 },
  { id: "sitapura", name: "Sitapura", x: 77, y: 76 },
];

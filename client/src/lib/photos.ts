export interface Photo {
  id: number;
  url: string;
  alt: string;
  category?: string;
  date?: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    url: "/photos/_DSC0098.jpg",
    alt: "Ambleside Beach at Sunset - West Vancouver",
    category: "Landscape",
    date: "2025-02-17",
  },
  {
    id: 2,
    url: "/photos/goat_6.jpg",
    alt: "A goat chilling in barn in Tofino",
    category: "Wildlife",
    date: "2025-02-16",
  },
  {
    id: 3,
    url: "/photos/sfu_light_bulbs.jpg",
    alt: "SFU Burnaby Light Bulb pictures",
    category: "Architecture",
    date: "2025-02-15",
  },
  {
    id: 4,
    url: "/photos/surfer_tofino_2.jpg",
    alt: "A Surfer in the waves of Tofino Beach, BC",
    category: "Sports",
    date: "2025-02-14",
  },
  {
    id: 5,
    url: "/photos/west_van_lighthouse.jpg",
    alt: "Point Atkinson Light house, West Vancouver",
    category: "Landscape",
    date: "2025-02-13",
  },
];
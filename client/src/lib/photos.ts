export interface Photo {
  id: number;
  url: string;
  alt: string;
  category?: string;
  date?: string;
}

const baseUrl = import.meta.env.BASE_URL;

export const photos: Photo[] = [
  {
    id: 1,
    url: `${baseUrl}photos/ambleside_sunset.jpg`,
    alt: "Ambleside Beach at Sunset - West Vancouver",
    category: "Landscape",
    date: "2025-02-17",
  },
  {
    id: 2,
    url: `${baseUrl}photos/goat_6.jpg`,
    alt: "A goat chilling in barn in Tofino",
    category: "Wildlife",
    date: "2025-02-16",
  },
  {
    id: 3,
    url: `${baseUrl}photos/sfu_light_bulbs.jpg`,
    alt: "SFU Burnaby Light Bulb pictures",
    category: "Architecture",
    date: "2025-02-15",
  },
  {
    id: 4,
    url: `${baseUrl}photos/surfer_tofino_2.jpg`,
    alt: "A Surfer in the waves of Tofino Beach, BC",
    category: "Sports",
    date: "2025-02-14",
  },
  {
    id: 5,
    url: `${baseUrl}photos/west_van_lighthouse.jpg`,
    alt: "Point Atkinson Light house, West Vancouver",
    category: "Landscape",
    date: "2025-02-13",
  },
];
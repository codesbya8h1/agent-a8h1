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
    url: "/photos/ambleside_sunset.jpg",
    alt: "Ambleside Beach at Sunset - West Vancouver",
  },
  {
    id: 2,
    url: "/photos/goat_6.jpg",
    alt: "A goat chilling in barn in Tofino",
  },
  {
    id: 3,
    url: "/photos/sfu_light_bulb.jpg",
    alt: "SFU Burnaby Light Bulb pictures",
  },
  {
    id: 4,
    url: "/photos/surfer_tofino_2.jpg",
    alt: "A Surfer in the waves of Tofino Beach, BC",
  },
  {
    id: 5,
    url: "/photos/west_van_lighthouse.jpg",
    alt: "Point Atkinson Light house, West Vancouver",
  },
];
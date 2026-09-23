export type ScentFamily = "Woody" | "Floral" | "Oriental" | "Fresh" | "Amber";

export type ScentOccasion = "Evening" | "Daytime" | "Signature" | "Everyday";

export interface ProductVolumeOption {
  ml: 30 | 50 | 100;
  price: number;
  inStock: boolean;
}

export interface ProductNotes {
  top: string;
  heart: string;
  base: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  scentFamily: ScentFamily;
  occasion: ScentOccasion;
  description: string;
  notes: ProductNotes;
  availability: "Available in Atelier" | "Made to Order" | "Sold Out";
  images: string[];
  volumes: ProductVolumeOption[];
  giftWrapAvailable: boolean;
}

export interface ProductSummary {
  id: string;
  slug: string;
  name: string;
  scentFamily: ScentFamily;
  startingPrice: number;
  image: string;
}

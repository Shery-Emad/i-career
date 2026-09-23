import type { Product } from "@/features/products/types";
import { bottlePlaceholder } from "@/features/products/data/placeholder";

export const mockProducts: Product[] = [
  {
    id: "santal-parchment",
    slug: "santal-parchment",
    name: "Santal Parchment",
    tagline: "Sun-warmed sandalwood on vellum paper",
    scentFamily: "Woody",
    occasion: "Evening",
    description:
      "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifts to clean papyrus and amber, rich sandalwood that dry down into cardamom and amber.",
    notes: {
      top: "Sicilian Bergamot, Pink Pepper",
      heart: "Egyptian Jasmine Sambac, Papyrus",
      base: "West Indian Sandalwood, Cardamom, Amber",
    },
    availability: "Available in Atelier",
    images: [
      bottlePlaceholder("Santal Parchment", "#d8b789", "#a97e4f"),
      bottlePlaceholder("Atelier", "#c9a876", "#8a6640"),
      bottlePlaceholder("Vial", "#e2c69a", "#b28a56"),
    ],
    volumes: [
      { ml: 30, price: 140, inStock: true },
      { ml: 50, price: 180, inStock: true },
      { ml: 100, price: 220, inStock: true },
    ],
    giftWrapAvailable: true,
  },
  {
    id: "fleur-de-lune",
    slug: "fleur-de-lune",
    name: "Fleur de Lune",
    tagline: "Moonlit jasmine over white petals",
    scentFamily: "Floral",
    occasion: "Evening",
    description:
      "Fleur de Lune opens with dewy petals under moonlight, settling into a soft, powdery jasmine heart that lingers close to the skin.",
    notes: {
      top: "Mandarin, White Peony",
      heart: "Jasmine Sambac, Tuberose",
      base: "White Musk, Iris Root",
    },
    availability: "Available in Atelier",
    images: [
      bottlePlaceholder("Fleur de Lune", "#e7cdd6", "#b98fa0"),
      bottlePlaceholder("Petals", "#f0dbe2", "#c9a3b1"),
    ],
    volumes: [
      { ml: 30, price: 125, inStock: true },
      { ml: 50, price: 155, inStock: true },
      { ml: 100, price: 195, inStock: true },
    ],
    giftWrapAvailable: true,
  },
  {
    id: "noir-cocoon",
    slug: "noir-cocoon",
    name: "Noir Cocoon",
    tagline: "Smoked tobacco wrapped in dark resin",
    scentFamily: "Oriental",
    occasion: "Evening",
    description:
      "Noir Cocoon is a dense, resinous wrap of smoked tobacco leaf and dark spice, built to sit close and last long after dusk.",
    notes: {
      top: "Black Pepper, Cassia",
      heart: "Tobacco Leaf, Labdanum",
      base: "Dark Amber, Oud",
    },
    availability: "Made to Order",
    images: [
      bottlePlaceholder("Noir Cocoon", "#3d3630", "#171310"),
      bottlePlaceholder("Resin", "#4a4038", "#201a15"),
    ],
    volumes: [
      { ml: 30, price: 165, inStock: true },
      { ml: 50, price: 200, inStock: true },
      { ml: 100, price: 240, inStock: false },
    ],
    giftWrapAvailable: true,
  },
  {
    id: "sol-dor",
    slug: "sol-dor",
    name: "Sol d'Or",
    tagline: "Golden citrus over green palm leaves",
    scentFamily: "Fresh",
    occasion: "Daytime",
    description:
      "Sol d'Or is a sun-drenched wash of golden citrus and green fig leaf, light enough for daylight wear and bright from first spray.",
    notes: {
      top: "Blood Orange, Fig Leaf",
      heart: "Neroli, Green Palm",
      base: "Vetiver, Blonde Woods",
    },
    availability: "Available in Atelier",
    images: [
      bottlePlaceholder("Sol d'Or", "#9fb98f", "#5f7a52"),
      bottlePlaceholder("Palm", "#b3cba2", "#748f63"),
    ],
    volumes: [
      { ml: 30, price: 120, inStock: true },
      { ml: 50, price: 150, inStock: true },
      { ml: 100, price: 185, inStock: true },
    ],
    giftWrapAvailable: false,
  },
  {
    id: "rose-absolute",
    slug: "rose-absolute",
    name: "Rose Absolute",
    tagline: "Pale rosewater over warm skin musk",
    scentFamily: "Floral",
    occasion: "Signature",
    description:
      "Rose Absolute is a soft, translucent rose built on warm skin musk, closer to bare skin than to a bouquet.",
    notes: {
      top: "Rosewater, Litchi",
      heart: "Turkish Rose, Peony",
      base: "Skin Musk, Cedarwood",
    },
    availability: "Available in Atelier",
    images: [
      bottlePlaceholder("Rose Absolute", "#f1d6d1", "#c99b96"),
      bottlePlaceholder("Rosewater", "#f6e2df", "#d8aca6"),
    ],
    volumes: [
      { ml: 30, price: 135, inStock: true },
      { ml: 50, price: 165, inStock: true },
      { ml: 100, price: 205, inStock: true },
    ],
    giftWrapAvailable: true,
  },
];

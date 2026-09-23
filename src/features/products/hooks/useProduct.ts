"use client";

import { useMemo, useState } from "react";
import type { Product, ProductVolumeOption } from "@/features/products/types";

interface UseProductResult {
  selectedVolume: ProductVolumeOption;
  setSelectedVolume: (ml: ProductVolumeOption["ml"]) => void;
  quantity: number;
  increment: () => void;
  decrement: () => void;
  giftWrap: boolean;
  toggleGiftWrap: () => void;
  totalPrice: number;
}

/**
 * Owns the interactive state of a single product's detail page:
 * which volume is selected, quantity, gift wrap, and derived total.
 */
export function useProduct(product: Product): UseProductResult {
  const inStockVolumes = product.volumes.filter((volume) => volume.inStock);
  const defaultVolume = inStockVolumes[inStockVolumes.length - 1] ?? product.volumes[0];

  const [selectedMl, setSelectedMl] = useState<ProductVolumeOption["ml"]>(
    defaultVolume.ml,
  );
  const [quantity, setQuantity] = useState(1);
  const [giftWrap, setGiftWrap] = useState(false);

  const selectedVolume = useMemo(
    () =>
      product.volumes.find((volume) => volume.ml === selectedMl) ?? defaultVolume,
    [product.volumes, selectedMl, defaultVolume],
  );

  const totalPrice = selectedVolume.price * quantity;

  return {
    selectedVolume,
    setSelectedVolume: setSelectedMl,
    quantity,
    increment: () => setQuantity((current) => Math.min(current + 1, 10)),
    decrement: () => setQuantity((current) => Math.max(current - 1, 1)),
    giftWrap,
    toggleGiftWrap: () => setGiftWrap((current) => !current),
    totalPrice,
  };
}

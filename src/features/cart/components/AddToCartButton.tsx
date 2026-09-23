"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/features/cart/store/cart.store";
import type { Product } from "@/features/products/types";

interface AddToCartButtonProps {
  product: Product;
  volumeMl: number;
  unitPrice: number;
  quantity: number;
  giftWrap: boolean;
  disabled?: boolean;
}

export function AddToCartButton({
  product,
  volumeMl,
  unitPrice,
  quantity,
  giftWrap,
  disabled,
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    addItem({
      productId: product.id,
      productSlug: product.slug,
      name: product.name,
      image: product.images[0],
      volumeMl,
      unitPrice,
      quantity,
      giftWrap,
    });

    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <Button
      type="button"
      onClick={handleAddToCart}
      disabled={disabled}
      className="w-full"
    >
      {justAdded ? "Added to Cart" : `Add to Cart · $${unitPrice * quantity}`}
    </Button>
  );
}

"use client";

import { ProductDetailsPage } from "@/features/products/components/ProductDetailsPage";
import { AddToCartButton } from "@/features/cart/components/AddToCartButton";
import type { Product, ProductSummary } from "@/features/products/types";

/**
 * Route-level composition. This is the one place allowed to know about
 * both `features/products` and `features/cart` — see
 * docs/FEATURE_OWNERSHIP.md.
 */
export function ProductDetailsWithCart({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: ProductSummary[];
}) {
  return (
    <ProductDetailsPage
      product={product}
      relatedProducts={relatedProducts}
      renderActions={({ volume, quantity, giftWrap }) => (
        <AddToCartButton
          product={product}
          volumeMl={volume.ml}
          unitPrice={volume.price}
          quantity={quantity}
          giftWrap={giftWrap}
          disabled={!volume.inStock}
        />
      )}
    />
  );
}

"use client";

import type { ReactNode } from "react";
import { useProduct } from "@/features/products/hooks/useProduct";
import { ProductImages } from "@/features/products/components/ProductImages";
import { ProductOptions } from "@/features/products/components/ProductOptions";
import type { Product, ProductVolumeOption } from "@/features/products/types";

export interface ProductSelection {
  volume: ProductVolumeOption;
  quantity: number;
  giftWrap: boolean;
}

interface ProductDetailsProps {
  product: Product;
  /**
   * Lets route-level composition (product-details-with-cart.tsx) render
   * the cart feature's AddToCartButton without this component reaching
   * across the feature boundary to import it directly.
   */
  renderActions?: (selection: ProductSelection) => ReactNode;
}

export function ProductDetails({ product, renderActions }: ProductDetailsProps) {
  const {
    selectedVolume,
    setSelectedVolume,
    quantity,
    increment,
    decrement,
    giftWrap,
    toggleGiftWrap,
  } = useProduct(product);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <nav className="mb-8 text-xs text-ink-soft">
        <span>Home</span> <span className="mx-1">›</span>
        <span>Shop</span> <span className="mx-1">›</span>
        <span className="capitalize">{product.scentFamily} Fragrances</span>{" "}
        <span className="mx-1">›</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-12 md:grid-cols-2">
        <ProductImages images={product.images} productName={product.name} />

        <div>
          <div className="flex gap-2 text-xs uppercase tracking-wide text-ink-soft">
            <span>{product.scentFamily}</span>
            <span>·</span>
            <span>Occasion: {product.occasion}</span>
          </div>

          <h1 className="mt-3 font-display text-3xl text-ink">
            {product.name}
          </h1>

          <p className="mt-2 text-2xl text-ink">${selectedVolume.price}</p>

          <p
            className={
              product.availability === "Sold Out"
                ? "mt-1 text-sm text-red-700"
                : "mt-1 text-sm text-emerald-700"
            }
          >
            ● {product.availability}
          </p>

          <div className="mt-6">
            <ProductOptions
              volumes={product.volumes}
              selectedVolume={selectedVolume}
              onSelectVolume={setSelectedVolume}
              giftWrapAvailable={product.giftWrapAvailable}
              giftWrap={giftWrap}
              onToggleGiftWrap={toggleGiftWrap}
              quantity={quantity}
              onIncrement={increment}
              onDecrement={decrement}
            />
          </div>

          <div className="mt-6">
            {renderActions?.({ volume: selectedVolume, quantity, giftWrap })}
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <h2 className="font-display text-lg text-ink">Scent Anatomy</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {product.description}
            </p>

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-t border-line pt-3">
                <dt className="text-ink-soft">Top Notes</dt>
                <dd className="text-right text-ink">{product.notes.top}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-line pt-3">
                <dt className="text-ink-soft">Heart Notes</dt>
                <dd className="text-right text-ink">{product.notes.heart}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-line pt-3">
                <dt className="text-ink-soft">Base Notes</dt>
                <dd className="text-right text-ink">{product.notes.base}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

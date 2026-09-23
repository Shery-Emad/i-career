"use client";

import Link from "next/link";
import { useCartStore } from "@/features/cart/store/cart.store";
import { formatPrice, lineTotal } from "@/features/cart/utils/cart.utils";
import type { CartLineItem } from "@/features/cart/types";

export function CartItem({ item }: { item: CartLineItem }) {
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <li className="flex items-center gap-4 border-b border-line py-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-20 flex-none rounded object-cover"
      />

      <div className="flex-1">
        <Link
          href={`/products/${item.productSlug}`}
          className="font-display text-base text-ink hover:underline"
        >
          {item.name}
        </Link>
        <p className="mt-1 text-sm text-ink-soft">
          {item.volumeMl} ml{item.giftWrap ? " · Gift wrapped" : ""}
        </p>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center border border-line">
            <button
              type="button"
              aria-label="Decrease quantity"
              className="px-3 py-1 text-ink-soft hover:text-ink"
              onClick={() => setQuantity(item.lineId, item.quantity - 1)}
            >
              −
            </button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              className="px-3 py-1 text-ink-soft hover:text-ink"
              onClick={() => setQuantity(item.lineId, item.quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="text-sm text-ink-soft underline hover:text-ink"
            onClick={() => removeItem(item.lineId)}
          >
            Remove
          </button>
        </div>
      </div>

      <p className="font-display text-base text-ink">
        {formatPrice(lineTotal(item))}
      </p>
    </li>
  );
}

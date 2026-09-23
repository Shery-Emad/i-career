"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/features/cart/store/cart.store";
import { CartItem } from "@/features/cart/components/CartItem";
import { CartSummary } from "@/features/cart/components/CartSummary";

export function CartPage() {
  const items = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-display text-3xl text-ink">Cart</h1>

      {!mounted || items.length === 0 ? (
        <div className="mt-10 border border-dashed border-line py-16 text-center text-ink-soft">
          <p>Your cart is empty.</p>
          <Link
            href="/products"
            className="mt-4 inline-block text-sm text-ink underline"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_320px]">
          <ul>
            {items.map((item) => (
              <CartItem key={item.lineId} item={item} />
            ))}
          </ul>
          <CartSummary items={items} />
        </div>
      )}
    </div>
  );
}

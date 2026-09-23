"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/features/cart/store/cart.store";
import { cartItemCount } from "@/features/cart/utils/cart.utils";

export function CartIndicator() {
  const items = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);

  // Avoid a hydration mismatch: the persisted cart is only readable
  // once we're on the client.
  useEffect(() => setMounted(true), []);

  const count = mounted ? cartItemCount(items) : 0;

  return (
    <span className="inline-flex items-center gap-1">
      Cart
      {count > 0 && (
        <span className="rounded-full bg-ink px-1.5 py-0.5 text-xs text-parchment">
          {count}
        </span>
      )}
    </span>
  );
}

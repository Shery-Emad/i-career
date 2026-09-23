import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLineItem } from "@/features/cart/types";

interface CartState {
  items: CartLineItem[];
  addItem: (item: Omit<CartLineItem, "lineId">) => void;
  removeItem: (lineId: string) => void;
  setQuantity: (lineId: string, quantity: number) => void;
}

function lineKey(item: Omit<CartLineItem, "lineId">): string {
  return `${item.productId}-${item.volumeMl}-${item.giftWrap}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const lineId = lineKey(item);
          const existing = state.items.find((line) => line.lineId === lineId);

          if (existing) {
            return {
              items: state.items.map((line) =>
                line.lineId === lineId
                  ? { ...line, quantity: line.quantity + item.quantity }
                  : line,
              ),
            };
          }

          return { items: [...state.items, { ...item, lineId }] };
        }),
      removeItem: (lineId) =>
        set((state) => ({
          items: state.items.filter((line) => line.lineId !== lineId),
        })),
      setQuantity: (lineId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((line) => line.lineId !== lineId)
              : state.items.map((line) =>
                  line.lineId === lineId ? { ...line, quantity } : line,
                ),
        })),
    }),
    { name: "odoratus-cart" },
  ),
);

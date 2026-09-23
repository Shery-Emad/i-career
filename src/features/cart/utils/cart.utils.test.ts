import {
  cartGiftWrapFees,
  cartItemCount,
  cartSubtotal,
  cartTotal,
  formatPrice,
  lineTotal,
} from "@/features/cart/utils/cart.utils";
import type { CartLineItem } from "@/features/cart/types";

function makeItem(overrides: Partial<CartLineItem> = {}): CartLineItem {
  return {
    lineId: "santal-parchment-100-false",
    productId: "santal-parchment",
    productSlug: "santal-parchment",
    name: "Santal Parchment",
    image: "data:image/svg+xml;utf8,<svg></svg>",
    volumeMl: 100,
    unitPrice: 220,
    quantity: 1,
    giftWrap: false,
    ...overrides,
  };
}

describe("cart.utils", () => {
  it("computes a line total without gift wrap", () => {
    const item = makeItem({ quantity: 2, unitPrice: 100 });
    expect(lineTotal(item)).toBe(200);
  });

  it("adds the gift wrap fee to a line total", () => {
    const item = makeItem({ quantity: 1, unitPrice: 100, giftWrap: true });
    expect(lineTotal(item)).toBe(108);
  });

  it("sums the subtotal across multiple lines", () => {
    const items = [
      makeItem({ lineId: "a", unitPrice: 100, quantity: 1 }),
      makeItem({ lineId: "b", unitPrice: 50, quantity: 2 }),
    ];
    expect(cartSubtotal(items)).toBe(200);
  });

  it("counts gift wrap fees only for wrapped lines", () => {
    const items = [
      makeItem({ lineId: "a", giftWrap: true }),
      makeItem({ lineId: "b", giftWrap: false }),
    ];
    expect(cartGiftWrapFees(items)).toBe(8);
  });

  it("computes the cart total as subtotal plus gift wrap fees", () => {
    const items = [
      makeItem({ lineId: "a", unitPrice: 100, quantity: 1, giftWrap: true }),
    ];
    expect(cartTotal(items)).toBe(108);
  });

  it("counts total quantity across lines", () => {
    const items = [
      makeItem({ lineId: "a", quantity: 2 }),
      makeItem({ lineId: "b", quantity: 3 }),
    ];
    expect(cartItemCount(items)).toBe(5);
  });

  it("formats a price as a whole dollar amount", () => {
    expect(formatPrice(220)).toBe("$220");
  });
});

import type { CartLineItem } from "@/features/cart/types";

const GIFT_WRAP_FEE = 8;

export function lineTotal(item: CartLineItem): number {
  return item.unitPrice * item.quantity + (item.giftWrap ? GIFT_WRAP_FEE : 0);
}

export function cartSubtotal(items: CartLineItem[]): number {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

export function cartGiftWrapFees(items: CartLineItem[]): number {
  return items.filter((item) => item.giftWrap).length * GIFT_WRAP_FEE;
}

export function cartTotal(items: CartLineItem[]): number {
  return cartSubtotal(items) + cartGiftWrapFees(items);
}

export function cartItemCount(items: CartLineItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(0)}`;
}

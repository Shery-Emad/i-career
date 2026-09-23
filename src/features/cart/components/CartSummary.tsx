import { Button } from "@/components/ui/Button";
import {
  cartGiftWrapFees,
  cartSubtotal,
  cartTotal,
  formatPrice,
} from "@/features/cart/utils/cart.utils";
import type { CartLineItem } from "@/features/cart/types";

export function CartSummary({ items }: { items: CartLineItem[] }) {
  const subtotal = cartSubtotal(items);
  const giftWrapFees = cartGiftWrapFees(items);
  const total = cartTotal(items);

  return (
    <div className="border border-line p-6">
      <h2 className="font-display text-lg text-ink">Order Summary</h2>

      <dl className="mt-4 space-y-2 text-sm text-ink-soft">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        {giftWrapFees > 0 && (
          <div className="flex justify-between">
            <dt>Gift wrapping</dt>
            <dd>{formatPrice(giftWrapFees)}</dd>
          </div>
        )}
        <div className="flex justify-between">
          <dt>Shipping</dt>
          <dd>Calculated at checkout</dd>
        </div>
      </dl>

      <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-base text-ink">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>

      <Button className="mt-6 w-full" disabled={items.length === 0}>
        Checkout
      </Button>
    </div>
  );
}

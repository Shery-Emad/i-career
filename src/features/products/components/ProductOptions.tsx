"use client";

import clsx from "clsx";
import type { ProductVolumeOption } from "@/features/products/types";

interface ProductOptionsProps {
  volumes: ProductVolumeOption[];
  selectedVolume: ProductVolumeOption;
  onSelectVolume: (ml: ProductVolumeOption["ml"]) => void;
  giftWrapAvailable: boolean;
  giftWrap: boolean;
  onToggleGiftWrap: () => void;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function ProductOptions({
  volumes,
  selectedVolume,
  onSelectVolume,
  giftWrapAvailable,
  giftWrap,
  onToggleGiftWrap,
  quantity,
  onIncrement,
  onDecrement,
}: ProductOptionsProps) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wide text-ink-soft">
          Select Volume
        </p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {volumes.map((volume) => {
            const isSelected = volume.ml === selectedVolume.ml;
            return (
              <button
                key={volume.ml}
                type="button"
                disabled={!volume.inStock}
                onClick={() => onSelectVolume(volume.ml)}
                aria-pressed={isSelected}
                className={clsx(
                  "flex flex-col items-center gap-1 border py-3 text-sm transition disabled:cursor-not-allowed disabled:opacity-40",
                  isSelected
                    ? "border-ink text-ink"
                    : "border-line text-ink-soft hover:border-ink/50",
                )}
              >
                <span>{volume.ml} ml</span>
                {isSelected && <span className="text-xs">${volume.price}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {giftWrapAvailable && (
        <label className="flex items-center justify-between border-t border-line pt-5">
          <span className="text-sm text-ink">
            Complimentary Signature Gift Wrapping
            <span className="mt-1 block text-xs text-ink-soft">
              Enveloped in vellum paper with custom wax seal stamp.
            </span>
          </span>
          <input
            type="checkbox"
            checked={giftWrap}
            onChange={onToggleGiftWrap}
            className="h-5 w-9 shrink-0 cursor-pointer appearance-none rounded-full bg-line transition checked:bg-clay relative
              before:absolute before:left-0.5 before:top-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition
              checked:before:translate-x-4"
          />
        </label>
      )}

      <div className="flex items-center gap-4 border-t border-line pt-5">
        <div className="flex items-center border border-line">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={onDecrement}
            className="px-4 py-2 text-ink-soft hover:text-ink"
          >
            −
          </button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={onIncrement}
            className="px-4 py-2 text-ink-soft hover:text-ink"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

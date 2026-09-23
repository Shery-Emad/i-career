import Link from "next/link";
import type { ProductSummary } from "@/features/products/types";

export function ProductCard({ product }: { product: ProductSummary }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden bg-parchment-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-3 font-display text-base text-ink">{product.name}</p>
      <p className="text-xs uppercase tracking-wide text-ink-soft">
        {product.scentFamily}
      </p>
      <p className="mt-1 text-sm text-ink">From ${product.startingPrice}</p>
    </Link>
  );
}

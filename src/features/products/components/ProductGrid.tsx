import { ProductCard } from "@/features/products/components/ProductCard";
import type { ProductSummary } from "@/features/products/types";

export function ProductGrid({ products }: { products: ProductSummary[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-ink-soft">
        No fragrances match your search yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

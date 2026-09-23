import type { Metadata } from "next";
import { getProducts } from "@/features/products/services/products.service";
import { ProductGrid } from "@/features/products/components/ProductGrid";

export const metadata: Metadata = {
  title: "Shop — Odoratus",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl text-ink">Products</h1>
        <p className="mt-2 text-sm text-ink-soft">
          The full Odoratus collection, poured in small atelier batches.
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}

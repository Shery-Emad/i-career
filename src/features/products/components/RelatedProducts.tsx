import Link from "next/link";
import type { ProductSummary } from "@/features/products/types";

export function RelatedProducts({ products }: { products: ProductSummary[] }) {
  if (products.length === 0) return null;

  return (
    <section className="bg-parchment-dark/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl text-ink">
            Olfactory Companions
          </h2>
          <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft">
            Fragrances of Synonymous Sophistication
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-parchment">
              <Link href={`/products/${product.slug}`}>
                <div className="aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>

              <div className="p-4">
                <Link
                  href={`/products/${product.slug}`}
                  className="font-display text-sm text-ink hover:underline"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
                  {product.scentFamily}
                </p>
                <p className="mt-2 text-sm text-ink">
                  ${product.startingPrice}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-3 block border border-ink/20 py-2 text-center text-xs uppercase tracking-wide text-ink hover:border-ink/60"
                >
                  Add to Cart ›
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

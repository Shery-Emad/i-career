import { env } from "@/config/env";
import { apiFetch } from "@/lib/api/client";
import { mockProducts } from "@/features/products/data/mock-products";
import type { Product, ProductSummary } from "@/features/products/types";

function toSummary(product: Product): ProductSummary {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    scentFamily: product.scentFamily,
    startingPrice: Math.min(...product.volumes.map((volume) => volume.price)),
    image: product.images[0],
  };
}

export async function getProducts(): Promise<ProductSummary[]> {
  if (env.useMockApi) {
    return mockProducts.map(toSummary);
  }

  return apiFetch<ProductSummary[]>("/products");
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (env.useMockApi) {
    return mockProducts.find((product) => product.slug === slug) ?? null;
  }

  try {
    return await apiFetch<Product>(`/products/${slug}`);
  } catch {
    return null;
  }
}

export async function getRelatedProducts(
  slug: string,
  limit = 4,
): Promise<ProductSummary[]> {
  if (env.useMockApi) {
    return mockProducts
      .filter((product) => product.slug !== slug)
      .slice(0, limit)
      .map(toSummary);
  }

  return apiFetch<ProductSummary[]>(`/products/${slug}/related?limit=${limit}`);
}

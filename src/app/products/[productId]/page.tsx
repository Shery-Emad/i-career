import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/features/products/services/products.service";
import { ProductDetailsWithCart } from "@/app/products/[productId]/product-details-with-cart";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = await getProductBySlug(productId);

  if (!product) {
    return { title: "Product not found — Odoratus" };
  }

  return {
    title: `${product.name} — Odoratus`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = await getProductBySlug(productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.slug);

  return (
    <ProductDetailsWithCart product={product} relatedProducts={relatedProducts} />
  );
}

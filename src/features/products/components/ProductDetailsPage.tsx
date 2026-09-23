import {
  ProductDetails,
  type ProductSelection,
} from "@/features/products/components/ProductDetails";
import { RelatedProducts } from "@/features/products/components/RelatedProducts";
import type { Product, ProductSummary } from "@/features/products/types";
import type { ReactNode } from "react";

interface ProductDetailsPageProps {
  product: Product;
  relatedProducts: ProductSummary[];
  /**
   * Injection point for the cart feature's "Add to Cart" control. Kept
   * as a render prop so this feature has no dependency on `features/cart`.
   */
  renderActions?: (selection: ProductSelection) => ReactNode;
}

export function ProductDetailsPage({
  product,
  relatedProducts,
  renderActions,
}: ProductDetailsPageProps) {
  return (
    <>
      <ProductDetails product={product} renderActions={renderActions} />
      <RelatedProducts products={relatedProducts} />
    </>
  );
}

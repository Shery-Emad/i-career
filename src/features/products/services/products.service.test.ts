import {
  getProductBySlug,
  getProducts,
  getRelatedProducts,
} from "@/features/products/services/products.service";

describe("products.service (mock mode)", () => {
  it("lists every product with a starting price", async () => {
    const products = await getProducts();
    expect(products.length).toBeGreaterThan(0);
    expect(products.every((product) => product.startingPrice > 0)).toBe(true);
  });

  it("finds a product by slug", async () => {
    const product = await getProductBySlug("santal-parchment");
    expect(product?.name).toBe("Santal Parchment");
    expect(product?.volumes.map((volume) => volume.ml)).toEqual([30, 50, 100]);
  });

  it("returns null for an unknown slug", async () => {
    const product = await getProductBySlug("does-not-exist");
    expect(product).toBeNull();
  });

  it("excludes the current product from its related products", async () => {
    const related = await getRelatedProducts("santal-parchment");
    expect(related.some((product) => product.slug === "santal-parchment")).toBe(
      false,
    );
  });
});

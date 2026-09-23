import type { Metadata } from "next";
import { CartPage } from "@/features/cart/components/CartPage";

export const metadata: Metadata = {
  title: "Cart — Odoratus",
};

export default function Page() {
  return <CartPage />;
}

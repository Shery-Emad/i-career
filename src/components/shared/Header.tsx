import Link from "next/link";
import { CartIndicator } from "@/features/cart/components/CartIndicator";

const NAV_LINKS = [
  { label: "Shop", href: "/products" },
  { label: "Categories", href: "/products" },
  { label: "The Atelier", href: "/products" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <nav className="hidden items-center gap-6 text-sm text-ink-soft md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="font-display text-xl tracking-[0.3em] text-ink"
        >
          ODORATUS
        </Link>

        <div className="flex items-center gap-5 text-sm text-ink-soft">
          <span className="hidden md:inline">Search</span>
          <span className="hidden md:inline">Account</span>
          <Link href="/cart" className="text-ink" aria-label="View cart">
            <CartIndicator />
          </Link>
        </div>
      </div>
    </header>
  );
}

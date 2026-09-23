"use client";

import type { ReactNode } from "react";

/**
 * Central place to mount client-side providers (cart hydration guard,
 * toasts, theming, etc.) so `src/app/layout.tsx` can stay a server
 * component.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

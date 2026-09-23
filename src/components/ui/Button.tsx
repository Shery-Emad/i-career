import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-ink text-parchment hover:bg-ink/90",
        variant === "secondary" &&
          "border border-ink/20 bg-transparent text-ink hover:border-ink/60",
        className,
      )}
      {...props}
    />
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "solid" | "mint";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-palette-light text-palette-pine border-zinc-200 hover:bg-brand-100",
    secondary: "bg-brand-100 text-palette-pine border-brand-200",
    outline: "border-brand-200 text-palette-pine bg-white hover:border-palette-jade",
    solid: "bg-palette-pine text-white border-transparent",
    mint: "bg-palette-mint/25 text-brand-950 border-palette-mint/60 font-semibold",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

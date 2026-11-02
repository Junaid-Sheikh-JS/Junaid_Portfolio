"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "secondary" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const variantStyles = {
      default:
        "bg-palette-pine text-white hover:bg-palette-pineDark active:scale-95 shadow-sm transition-all duration-200",
      outline:
        "bg-white text-palette-pine border border-zinc-300 hover:bg-brand-50 hover:border-palette-jade transition-colors duration-200",
      ghost:
        "text-zinc-700 hover:text-palette-pine hover:bg-brand-50 transition-colors duration-150",
      secondary:
        "bg-palette-light text-palette-pine hover:bg-brand-100 transition-colors duration-200",
      link:
        "text-palette-pine underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      default: "px-5 py-2.5 text-sm font-medium rounded-lg",
      sm: "px-3.5 py-1.5 text-xs font-medium rounded-md",
      lg: "px-6 py-3 text-base font-medium rounded-xl",
      icon: "h-9 w-9 rounded-lg flex items-center justify-center p-0",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-palette-pine focus-visible:ring-offset-2",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

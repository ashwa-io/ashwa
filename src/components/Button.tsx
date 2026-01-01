import { Loader2 } from "lucide-react"
import React from "react"

import { cn, focusRing } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "light" | "ghost" | "destructive"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean
  loadingText?: string
  variant?: ButtonVariant
}

const getVariantClasses = (variant: ButtonVariant = "primary"): string => {
  const baseClasses = "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg border px-3 py-2 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out disabled:pointer-events-none disabled:shadow-none"

  const variants: Record<ButtonVariant, string> = {
    primary: [
      "border-transparent",
      "text-primary-foreground",
      "bg-primary",
      "hover:bg-primary/90",
      "disabled:bg-primary/50 disabled:text-primary-foreground/50",
    ].join(" "),
    secondary: [
      "border-border",
      "text-secondary-foreground",
      "bg-secondary",
      "hover:bg-secondary/80",
      "disabled:text-muted-foreground",
    ].join(" "),
    light: [
      "shadow-none",
      "border-transparent",
      "text-foreground",
      "bg-muted",
      "hover:bg-muted/80",
      "disabled:bg-muted/50 disabled:text-muted-foreground",
    ].join(" "),
    ghost: [
      "shadow-none",
      "border-transparent",
      "text-foreground",
      "bg-transparent",
      "hover:bg-accent hover:text-accent-foreground",
      "disabled:text-muted-foreground",
    ].join(" "),
    destructive: [
      "text-white",
      "border-transparent",
      "bg-destructive",
      "hover:bg-destructive/90",
      "disabled:bg-destructive/50 disabled:text-white/50",
    ].join(" "),
  }

  return cn(baseClasses, focusRing, variants[variant])
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant = "primary",
      children,
      ...props
    }: ButtonProps,
    forwardedRef,
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={cn(getVariantClasses(variant), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <Loader2
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : "Loading"}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button, type ButtonProps, type ButtonVariant }

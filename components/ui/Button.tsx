import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Note: Import lucide-react icons as needed
// Example: import { ShoppingBag, Heart } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  children: ReactNode;
}

export function Button({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-sans font-light px-8 py-3 transition-all duration-300 ease-in-out";
  
  const variants = {
    default:
      "bg-brand-accent text-background border border-brand-accent hover:bg-brand-accent/90",
    outline:
      "bg-transparent text-brand-accent border border-brand-accent/30 hover:bg-soft-accent hover:border-brand-accent/50",
    ghost:
      "bg-transparent text-foreground border-0 border-b border-foreground/20 hover:border-foreground/50",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}


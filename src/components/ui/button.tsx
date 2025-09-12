import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-custom-sm hover:shadow-custom-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-custom-sm hover:shadow-custom-md",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-custom-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-custom-sm hover:shadow-custom-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // HelpConnect specific variants
        hero: "bg-gradient-hero text-white hover:shadow-glow hover:scale-105 transition-bounce shadow-custom-lg",
        support: "bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-custom-sm hover:shadow-custom-md hover:-translate-y-0.5",
        helper: "bg-accent text-accent-foreground hover:bg-accent-light shadow-custom-sm hover:shadow-custom-md hover:-translate-y-0.5",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-custom-sm hover:shadow-custom-md",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-custom-sm hover:shadow-custom-md",
        glass: "glass-effect text-white hover:bg-white/20 border border-white/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

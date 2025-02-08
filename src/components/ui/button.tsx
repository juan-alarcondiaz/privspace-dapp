import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center bg-jaguar-600 text-white-50 " +
    "hover:bg-jaguar-800 gap-2 whitespace-nowrap text-base font-medium " +
    "ring-offset-white-50 transition-colors focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-jaguar-800 " +
    "focus-visible:ring-offset-2 disabled:pointer-events-none " +
    "disabled:opacity-50 [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "rounded-3xl",
        icon: "rounded-lg",
        alternative: "rounded-3xl bg-jaguar-950 hover:bg-jaguar-950/80"
      },
      size: {
        default: "w-52 h-14 p-3",
        icon: "w-12 h-12",
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

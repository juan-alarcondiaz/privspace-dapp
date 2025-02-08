import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-transparent flex h-11 w-full rounded-xl border" +
            " border-jaguar-800 px-3 py-2 text-base ring-offset-jaguar-800" +
            " text-jaguar-950 placeholder:text-white-200" +
            " file:border-0 file:text-sm focus-visible:ring-white-50" +
            " file:font-medium focus-visible:outline-none focus-visible:ring-2" +
            " focus-visible:ring-offset-2 disabled:cursor-not-allowed" +
            " disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

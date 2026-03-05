"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-brand-rose text-white hover:bg-brand-rose/90 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_8px_16px_-4px_rgba(212,141,129,0.2)]",
            secondary: "bg-brand-charcoal text-white hover:bg-brand-charcoal/90 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]",
            outline: "border border-brand-charcoal/20 bg-transparent hover:bg-brand-charcoal/5",
            ghost: "bg-transparent hover:bg-brand-charcoal/5",
        };

        const sizes = {
            sm: "px-5 py-2.5 text-sm font-medium",
            md: "px-7 py-3.5 text-base font-medium",
            lg: "px-10 py-4.5 text-lg font-semibold",
            xl: "px-12 py-5 text-xl font-bold tracking-tight",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-rose disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden relative",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };

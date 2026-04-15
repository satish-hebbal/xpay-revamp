import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "tinted";
}

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors overflow-hidden group cursor-pointer",
        variant === "default" && "bg-white border-xpay-border text-xpay-text",
        variant === "tinted" && "bg-pink-50 border-pink-200 text-pink-700",
        className
      )}
    >
      {/* Shine effect */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]" />
      {children}
    </span>
  );
}

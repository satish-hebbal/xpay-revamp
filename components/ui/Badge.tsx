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
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
        variant === "default" && "bg-white border-xpay-border text-xpay-text",
        variant === "tinted" && "bg-pink-50 border-pink-200 text-pink-700",
        className
      )}
    >
      {children}
    </span>
  );
}

import React from "react";
import type { LucideProps } from "lucide-react";

export function DevpostIcon({ size = 24, ...props }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6.005 2.5 18 2.5l4 9.5-4 9.5H6.005L2 12z" />
      <path d="M10 8h3a3.5 3.5 0 0 1 0 7h-3V8z" />
    </svg>
  );
}
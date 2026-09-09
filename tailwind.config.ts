import type { Config } from "tailwindcss";

// All design tokens are defined once as CSS variables in src/index.css.
// Tailwind just points at them, so re-theming the whole site means
// editing index.css only — never these class names.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        border: "var(--color-border)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "hero-bg": "var(--color-hero-bg)",
        "hero-text": "var(--color-hero-text)",
        "hero-text-secondary": "var(--color-hero-text-secondary)",
      },
      fontFamily: {
        body: ["var(--font-body)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

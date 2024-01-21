import type { Config } from "tailwindcss";

export default {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        shadows: ['"Shadows Into Light"', "cursive"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          content: "var(--primary-color-text)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        surface: {
          DEFAULT: "var(--surface-a)",
          a: "var(--surface-a)",
          b: "var(--surface-b)",
          c: "var(--surface-c)",
          d: "var(--surface-d)",
          e: "var(--surface-e)",
          f: "var(--surface-f)",
        },
        content: "var(--text-color)",
        muted: "var(--text-color-secondary)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

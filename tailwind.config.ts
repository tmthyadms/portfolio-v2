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
          DEFAULT: "rgb(var(--primary-color) / <alpha-value>)",
          content: "rgb(var(--primary-color-text) / <alpha-value>)",
          50: "rgb(var(--primary-50) / <alpha-value>)",
          100: "rgb(var(--primary-100) / <alpha-value>)",
          200: "rgb(var(--primary-200) / <alpha-value>)",
          300: "rgb(var(--primary-300) / <alpha-value>)",
          400: "rgb(var(--primary-400) / <alpha-value>)",
          500: "rgb(var(--primary-500) / <alpha-value>)",
          600: "rgb(var(--primary-600) / <alpha-value>)",
          700: "rgb(var(--primary-700) / <alpha-value>)",
          800: "rgb(var(--primary-800) / <alpha-value>)",
          900: "rgb(var(--primary-900) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface-a) / <alpha-value>)",
          a: "rgb(var(--surface-a) / <alpha-value>)",
          b: "rgb(var(--surface-b) / <alpha-value>)",
          c: "rgb(var(--surface-c) / <alpha-value>)",
          d: "rgb(var(--surface-d) / <alpha-value>)",
          e: "rgb(var(--surface-e) / <alpha-value>)",
          f: "rgb(var(--surface-f) / <alpha-value>)",
          0: "rgb(var(--surface-0) / <alpha-value>)",
          50: "rgb(var(--surface-50) / <alpha-value>)",
          100: "rgb(var(--surface-100) / <alpha-value>)",
          200: "rgb(var(--surface-200) / <alpha-value>)",
          300: "rgb(var(--surface-300) / <alpha-value>)",
          400: "rgb(var(--surface-400) / <alpha-value>)",
          500: "rgb(var(--surface-500) / <alpha-value>)",
          600: "rgb(var(--surface-600) / <alpha-value>)",
          700: "rgb(var(--surface-700) / <alpha-value>)",
          800: "rgb(var(--surface-800) / <alpha-value>)",
          900: "rgb(var(--surface-900) / <alpha-value>)",
        },
        content: "rgb(var(--text-color) / <alpha-value>)",
        muted: "rgb(var(--text-color-secondary) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
} satisfies Config;

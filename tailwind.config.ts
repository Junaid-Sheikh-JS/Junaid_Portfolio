import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F7FAF8",
        border: "#E2E8E5",
        body: "#4A5551",
        palette: {
          light: "#EEEEEE",
          mint: "#6FCF97",
          jade: "#2FA084",
          pine: "#1F6F5F",
          pineDark: "#17564A",
        },
        brand: {
          50: "#F2F9F6",
          100: "#E2F4EC",
          200: "#C6E9D9",
          300: "#9DD9BE",
          400: "#6FCF97", // Palette mint
          500: "#48B682",
          600: "#2FA084", // Palette jade
          700: "#24836C",
          800: "#1F6F5F", // Palette deep pine
          900: "#17564A", // Palette dark pine
          950: "#0D352E",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Georgia",
          "Cambria",
          "'Times New Roman'",
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;

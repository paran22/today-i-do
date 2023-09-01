import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#2B3A55",
        primary: "#CE7777",
        secondary: "#E8C4C4",
        textColor: "#F2E5E5",
      },
    },
  },
  plugins: [],
} satisfies Config;

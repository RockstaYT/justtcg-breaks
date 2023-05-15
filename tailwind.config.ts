import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      site: "#e3e3e3",
      "text-color": "#474747",
      "text-color-light": "#f5fff9",
      accent: "#00e052",
    },
  },
  plugins: [],
} satisfies Config;

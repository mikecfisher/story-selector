import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "gt-super-text": ["var(--font-gt-text)", "serif"],
        "gt-super-display": ["var(--font-gt-display)", "serif"],
        "gt-america": ["var(--font-gt-america)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

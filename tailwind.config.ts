import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: "#001e3a",
        palePeach: "#fff9d9",
        lightGold: "#f4d24c",
        mediumGold: "#d6ac34",
        darkGold: "#c7a84e",
        brown: "#74725E",
        shinyBlack: "#151A1C",
        cameo: "#94a585",
      },
    },
  },
  plugins: [],
};
export default config;

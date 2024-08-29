import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        airthings_textcolor: "#21282d",
        airthings_yellow: "#ffc000",
        airthings_backgroundcolor: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
export default config;

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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'parchment': "url('/bg/parchment-light.jpg')",
        'shale': "url('/bg/shale.jpg')",
      },
      aspectRatio: {
        'banner': '10 / 3',
      },
      fontFamily: {
        'serif': "var(--font-serif)",
        'sans': "var(--font-sans)",
      },
    },
  },
  plugins: [],
};
export default config;

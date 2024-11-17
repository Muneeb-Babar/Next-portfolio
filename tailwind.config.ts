import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function ({ addComponents }) {
      addComponents({
        '.text-stroke': {
          '-webkit-text-stroke': '2px black', // Black outline
          'color': 'transparent',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
      });
    },
  ],
} satisfies Config;

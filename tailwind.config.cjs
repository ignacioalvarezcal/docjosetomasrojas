const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f8ff",
          100: "#b3ecff",
          200: "#80e0ff",
          300: "#4dd5ff",
          400: "#1ac9ff",
          500: "#00BFFF",
          600: "#00a6e6",
          700: "#008ecc",
          800: "#0075b3",
          900: "#005c8a",
        },
      },
      fontFamily: {
        sans: ['"Work Sans Variable"', ...defaultTheme.fontFamily.sans],
        'heading-1': ['"Playfair Display Variable"', ...defaultTheme.fontFamily.sans],
        'heading-2': ['"Raleway Variable"', ...defaultTheme.fontFamily.sans],
        'decorative': ['"Cinzel Decorative"', '"Playfair Display Variable"', ...defaultTheme.fontFamily.sans],
        'open-sans': ['"Open Sans Variable"', ...defaultTheme.fontFamily.sans],
        'roboto': ['"Roboto Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

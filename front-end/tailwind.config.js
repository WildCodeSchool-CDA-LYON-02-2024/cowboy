/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'map-bg': "url('/map.jpeg')",
      },
    },
    fontFamily: {
      pixelife: ['"Red Rose"', 'cursive'],
    },
  },
  plugins: [],
};

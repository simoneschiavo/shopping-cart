/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "t-shirt": "url('/tshirts2.jpg')",
        "jeans": "url('/jeans.jpg')",
        "electronics": "url('/electronics2.jpg')",
        "women-clothing": "url('/womens-clothing.jpg')",
        "jewelery": "url('/jewelry.jpg')",
      },
    },
  },
  plugins: [],
};

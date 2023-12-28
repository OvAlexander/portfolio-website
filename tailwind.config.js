/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0E0B16",
        "secondary": "#3b1449",
        "accent": "#0277BD",
        "back": "#E7DFDD",
      },
    },  
  },
  plugins: [],
};

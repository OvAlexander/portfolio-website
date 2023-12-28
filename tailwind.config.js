/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#00FFFF",
        "secondary": "#FF6347",
        "accent": "#50E3C2",
        "back": "#F5F5F5",
      },
    },
  },
  plugins: [],
};

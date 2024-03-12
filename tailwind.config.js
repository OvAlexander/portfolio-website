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
        // "accent": "#5FA1B8", //moonstone buttons
        // "back": "#F6F7F8",  //seasalt background type color
        // "secondary": "#9C6496", //pomp and power, through out page
        // "primary": "#633C75",    //finn, header
        // "blk": "#26730"         //raisin black
      },
    },  
  },
  plugins: [],
};

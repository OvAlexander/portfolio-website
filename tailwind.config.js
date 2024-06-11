/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    imageSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
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

        "moon": "#5FA1B8", //moonstone buttons
        "sea": "#F6F7F8",  //seasalt background type color
        "sea-100": "#F6F7F8",  //seasalt background type color
        "pomp": "#9C6496", //pomp and power, through out page
        "finn": "#633C75",    //finn, header
      },
    },  
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "570px",
      //=> @media (min-width: 360px) { ... }

      // md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 820px) { ... }

      // "2lg": "1024px",
      // => @media (min-width: 820px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      // "1xl": "1366px",
      // // => @media (min-width: 1366px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      // 3xl: "1920px",
      // // => @media (min-width: 1920px) { ... }
    },
    extend: {

      colors: { 
        // main: "#9D7558",       
        // lightGrey: "#6b7280",
       
        bgDark: "#272727",
      },

    },
  },
  plugins: [],
}

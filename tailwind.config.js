/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1050px",
        md: "800px",
        xl: "1600px",
        tab: "700px",
        mobile: "415px",
      },
      colors: {
        text1: "#002348",
        text2: "#003B79",
      },
      boxShadow: {
        iconShadow: "0 10px 50px 25px rgba(0, 59, 121, 0.07)",
      },
    },
  },
  plugins: [],
};

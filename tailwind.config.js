/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#007EF3",
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

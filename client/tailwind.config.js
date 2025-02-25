/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 100%)",
      },
    },
  },
  plugins: [],
};

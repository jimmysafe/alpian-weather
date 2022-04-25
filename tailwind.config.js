module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "0 2rem 6rem rgb(0 0 0 / 10%)",
      },
      colors: {
        gray: {
          100: "#f7f7f778",
        },
      },
      screens: {
        lg: "1030px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        84: "22.5rem",
      },
      borderRadius: {
        regular: "5px",
      },
      boxShadow: {
        "3xl": "0 40px 99px 8px rgba(0, 0, 0, 0.25)",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      backgroundImage: {
        "login-pattern": "url('../../assets/images/loginImg.png')",
      },
      gradientColorStops: {
        "trust-gradient":
          "linear-gradient(185.79deg, #055AC3 2.23%, #043064 98.43%)",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      blue: "#568ad3",
    },
  },
  plugins: [],
};

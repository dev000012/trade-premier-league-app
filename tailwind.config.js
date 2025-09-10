/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1C2127",
          light: "#FFFFFF",
          accent: "#FFC107",
          secondary: "#859AB7",
          success: "#FBC700",
          warning: "#FFA812",
          error: "#B96072",
          info: "#733C8A",
        },
        background: {
          dark: "#1C2127",
          light: "#FFFFFF",
          card: "rgba(99, 113, 129, 0.14)",
          overlay: "rgba(28, 33, 39, 0.68)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },
      boxShadow: {
        card: "0px 8px 24px -4px rgba(10, 9, 13, 0.04), 0px 6px 12px -6px rgba(10, 9, 13, 0.08)",
        button:
          "0px 1.25px 3.75px 0px rgba(0, 0, 0, 0.1), 0px 3.75px 10px 0px rgba(0, 0, 0, 0.1), 0px 0px 0.625px 0px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

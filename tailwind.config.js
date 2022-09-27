/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primary2BaseGradient:
          "linear-gradient(90deg, #D95800 39.58%, #22211B 100%)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D95800",
          secondary: "#D95800",
          accent: "#D95800",
          neutral: "#F4E2D6",
          "base-100": "#22211B",
          "base-200": "#3B3A34",
          "base-300": "#53524E",
          "base-content": "#F9F9FB",
          // info: "#3ABFF8",
          // success: "#36D399",
          // warning: "#FBBD23",
          // error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      //HTML tag comparison only for reference, since tags should not be used to resize text
      //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#usage_notes

      sm: [
        //small
        "0.937rem",
        {
          // lineHeight: "2rem",
          // letterSpacing: "-0.01em",
          // fontWeight: "500",
        },
      ],

      base: [
        //body
        "1.265rem", //18px
        {
          lineHeight: "1.75", //31px
          // letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],

      lg: [
        //h5
        "1.350rem", //21px
        {
          lineHeight: "1.3", //27px
          // letterSpacing: "-0.01em",
          fontWeight: "600",
        },
      ],

      xl: [
        //h4
        "1.620rem", //26px
        {
          lineHeight: "1.3", //33px
          // letterSpacing: "-0.01em",
          fontWeight: "600",
        },
      ],

      "2xl": [
        //h3
        "1.944rem", //31px
        {
          lineHeight: "1.3", //40px
          // letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],

      "3xl": [
        //h2
        "2.333rem", //37px
        {
          lineHeight: "1.3", //48px
          // letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      "4xl": [
        //h1
        "2.799rem", //45px
        {
          lineHeight: "1.3", //58px
          // letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      colors: {
        primary: {
          100: "#E79D6B",
          200: "#E28647",
          300: "#DE6F24",
          400: "#D95800",
        },
        dark: {
          100: "#E6E6E6",
          200: "#CECECC",
          300: "#B5B5B3",
          400: "#9D9C9A",
          500: "#848480",
          600: "#6C6B67",
          700: "#53524E",
          800: "#3B3A34",
          900: "#22211B",
        },
        light: "#F4E2D6",
      },
      backgroundImage: {
        primary2BaseGradient:
          "linear-gradient(90deg, #D95800 39.58%, #22211B 100%)",
        lightPrimaryGradient:
          "linear-gradient(90deg, #E79D6B 0%, #D95800 100%)",
      },
      fontFamily: {
        body: ["Hind Madurai", "sans-serif"],
        title: ["Rajdhani", "sans-serif"],
        subtitle: ["Maitree", "serif"],
        numeric: ["Roboto Mono", "monospace"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#D95800",
          secondary: "#DE6F24",
          accent: "#E28647",
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
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};

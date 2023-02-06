/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    // extend: {
    //   colors: {
    // light: "#F6F3F3",
    // dark: "#070509",
    // "sub-primary": "#D49C9C",
    // primary: "#CB7777",
    // secondary: "#ABA6A5",
    // "sub-ternary": "#5C4A47",
    // "sub-secondary": "#9E5D54",
    // ternary: "#AA8D74",
    //   },
    // },
    fontFamily: {
      sans: ['"Hanken Grotesk"', "sans-serif"],
      serif: ['"Hanken Grotesk"', "sans-serif"],
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        smarttv: {
          primary: "#CB7777",

          secondary: "#ABA6A5",

          accent: "#AA8D74",

          neutral: "#070509",

          "base-100": "#F6F3F3",

          info: "#91D3ED",

          success: "#186854",

          warning: "#9E5D54",

          error: "#D49C9C",
        },
      },
    ],
  },
};

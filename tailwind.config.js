module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
      colors: {
        "header-grey": "#45547F",
        "accent-grey": "#737687",
        "alert-red": "#F15259",
      },
      gridTemplateColumns: {
        mainLayout: "75% 25%",
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["responsive", "dark", "focus-within", "focus", "hover"],
      ringOffsetColor: ["responsive", "dark", "focus-within", "focus", "hover"],
      ringOffsetWidth: ["responsive", "focus-within", "focus", "hover"],
      ringOpacity: ["responsive", "dark", "focus-within", "focus", "hover"],
      ringWidth: ["responsive", "focus-within", "focus", "hover"],
      visibility: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

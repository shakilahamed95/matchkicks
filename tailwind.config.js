/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 3px 8px rgba(11, 50, 93, 0.08)',
      }
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#DE0404",
          secondary: "#F3F2F3",
          accent: "#34495E",
          neutral: "#E7ECF1",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
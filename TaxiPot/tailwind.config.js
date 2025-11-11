/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue1: "#B0CEEF",
        blue2: "#BAD5F3",
        blue3: "#D1E1F8",
        blue4: "#E3ECFE",
        buttonBlue: "#7FA9D7"
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pred: "#DC222C",
        pblue: "#1D3264",
      },
      keyframes: {
        plane: {
          "0%": {
            transform: "translateX(100vw) translateY(-50%)",
          },
          // "50%":{
          //   transform: "translateX(0) translateY(-50%)"
          // },
          "100%": {
            transform: "tranalateX(-100vw) translateY(-50%)",
          },
        },
      },
      animation: {
        plane: "plane 8s ease-in-out ",
      },
    },
  },
  plugins: [],
};

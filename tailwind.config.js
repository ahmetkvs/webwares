/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        //You can find the color palette (grid) in the design file under assets
        //row1
        row1prim: "#23856D",
        row1sec: "#47AD97",
        row1third: "#17213C",
        //row2
        row2prim: "#39603D",
        row2sec: "#176552",
        row2third: "#3C403D",
        //row3
        row3prim: "#B73225",
        row3sec: "#004E7C",
        row3third: "#283747",
        //row4
        row4prim: "#E63946",
        row4sec: "#457B9D",
        row4third: "#1D3557",
        //row5
        row5prim: "#FF7B47",
        row5sec: "#0D5C63",
        row5third: "#17213C",
        //row6
        row6prim: "#FCA311",
        row6sec: "#14213D",
        row6third: "#14213D",
        //row7
        row7prim: "#FFA62B",
        row7sec: "#00A1C1",
        row7third: "#16697A",
      },
    },
  },
  plugins: [],
};

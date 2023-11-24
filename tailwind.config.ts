import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ffdbc4",
        secondary: "#022235",
        "gray-special": "#e3e3e3",
      },
      backgroundImage: {
        main: "url('/img/test3.jpeg')",
        patron: "url(/img/patron.avif)",
        muertos: "url(/img/patrones/muertos.png)",
        papel: "url(/img/patrones/papel.png)",

        radio1: "url(/img/programas/valor.jpeg)",
        radio2: "url(/img/programas/abundancia.jpeg)",
        radio3: "url(/img/programas/reflexion.jpeg)",

        manuel: "url(/img/manuel-vera.jpeg)",
        kikis: "url(/img/kikis.jpeg)",
        secret: "url(/img/secrete.jpeg)",
      },
    },
  },
  plugins: [],
} satisfies Config;

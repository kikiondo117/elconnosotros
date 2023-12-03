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
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        main: "url('/img/test3.jpeg')",
        paloma: "url(/img/patrones/paloma.png)",

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

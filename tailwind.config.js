/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
    },
    extend: {
      colors: {
        ink: "#241811",
        espresso: "#3A2A1D",
        coffee: "#5C4531",
        bark: "#7A6046",
        caramel: "#B8793C",
        "caramel-light": "#D8A366",
        "caramel-dim": "#8F5F2E",
        cream: "#F1E8D8",
        paper: "#FAF6EE",
        sand: "#E7DCC6",
        sage: "#6C7256",
        rust: "#9C5B3C",
      },
      fontFamily: {
        display: ["\"Playfair Display\"", "serif"],
        body: ["Manrope", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
      maxWidth: {
        container: "1360px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        soft: "0 30px 60px -25px rgba(36, 24, 17, 0.35)",
        card: "0 20px 40px -20px rgba(36, 24, 17, 0.3)",
        lift: "0 10px 30px -12px rgba(36, 24, 17, 0.25)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

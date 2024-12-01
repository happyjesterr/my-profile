import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "750px",
        md: "850px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      screens: {
        prve: { max: "450px" },
      },
      minHeight: {
        custom: "calc(100vh - 64px)",
      },
      keyframes: {
        hedar: {
          from: { top: "-60px", opacity: "0" },
          to: { top: "0", opacity: "1" },
        },
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          ".hover-text-shadow": {
            textShadow: "0 0 4px #fff, 0 0 15px #5271ff",
          },
        },
        ["hover"]
      );
    }),
  ],
};

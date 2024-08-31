/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        gray1: {
          "100": "#fafafa",
          "200": "#3c2517",
          "300": "#3c1403",
          "400": "#0d1014",
          "500": "#0c1015",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(255, 255, 255, 0.4)",
          "800": "rgba(255, 255, 255, 0.5)",
          "900": "rgba(255, 255, 255, 0.6)",
        },
        "gray-300": "#d0d5dd",
        silver: {
          "100": "rgba(196, 196, 196, 0.66)",
          "200": "rgba(187, 187, 187, 0.12)",
          "300": "rgba(187, 187, 187, 0.15)",
        },
        royalblue: {
          "100": "#1a73e8",
          "200": "#1570ef",
          "300": "rgba(26, 115, 232, 0.89)",
          "400": "rgba(26, 115, 232, 0.6)",
          "500": "rgba(26, 115, 232, 0.4)",
          "600": "rgba(26, 115, 232, 0.2)",
          "700": "rgba(26, 115, 232, 0.1)",
          "800": "rgba(26, 115, 232, 0.15)",
        },
        forestgreen: "#27b648",
        darkgray: "#a1a1a1",
        darkorchid: {
          "100": "#853bce",
          "200": "rgba(133, 59, 206, 0.8)",
          "300": "rgba(133, 59, 206, 0.6)",
          "400": "rgba(133, 59, 206, 0.4)",
          "500": "rgba(133, 59, 206, 0.1)",
          "600": "rgba(133, 59, 206, 0.15)",
        },
        darkred: "#962d00",
        lightsalmon: "#fc9c66",
        whitesmoke: {
          "100": "#ededed",
          "200": "rgba(249, 250, 251, 0)",
        },
        ghostwhite: {
          "100": "#f1f1ff",
          "200": "rgba(241, 241, 255, 0.4)",
          "300": "rgba(241, 241, 255, 0.6)",
        },
        mediumseagreen: "#63c174",
        darkslateblue: "rgba(99, 73, 125, 0.22)",
        "gray-600": "#475467",
        "gray-500": "#667085",
        "gray-700": "#344154",
        lightseagreen: "rgba(8, 165, 147, 0.15)",
        mediumspringgreen: {
          "100": "#19fb9b",
          "200": "rgba(25, 251, 155, 0.15)",
        },
        "primary-50": "#eff8ff",
        "primary-700": "#175cd3",
        crimson: {
          "100": "#f02849",
          "200": "rgba(240, 40, 73, 0.15)",
        },
        "gray-50": "#f9fafb",
      },
      spacing: {},
      fontFamily: {
        "text-sm-regular": "Inter",
        geist: "Geist",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "181xl": "200px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      smi: "13px",
      "5xl": "24px",
      lg: "18px",
      "3xl": "22px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

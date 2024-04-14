/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        nextjs: {
          primary: "#f31260",
          "primary-focus": "#C20E4D",
          "primary-content": "#ffffff",
          secondary: "#006FEE",
          "secondary-focus": "#005BC4",
          "secondary-content": "#ffffff",
          accent: "#0c9784",
          "accent-focus": "#2ba69a",
          "accent-content": "#ffffff",
          neutral: "#333333",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "#000000",
          "base-200": "#0a0a0a",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
          info: "#0070f3",
          success: "#17C964",
          warning: "#F5A524",
          error: "#F31260",
          "--rounded-box": "0.4rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": ".25s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
}


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true, // bisa hapus tanda kutip untuk value boolean
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },

  plugins: [],
};

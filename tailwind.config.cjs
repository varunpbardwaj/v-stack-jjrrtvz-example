/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-bg": "#17181C",
      "light-bg": "#F9F9F9",
      "dark-fg": "#C1C2C5",
      "light-fg": "#181818",
      "nav-dark-bg": "#25262B",
      "nav-light-bg": "#FFFFFF",
      "nav-dark-fg": "#FFFFFF",
      "nav-light-fg": "#1A202C",
    },
  },
  plugins: [],
};

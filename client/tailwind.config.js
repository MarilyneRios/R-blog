const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // inclure tous les types de fichiers nécessaires
    flowbite.content(),
  ],
  plugins: [
    flowbite.plugin(),
  ],
};

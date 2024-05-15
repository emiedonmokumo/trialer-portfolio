/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: {'max': '472px'},
      md: {'max': '769px'},
      lg: {'min': '992px'}
    },
    colors: {
      gray: '#ABB2BF',
      white: '#FFFFFF',
      primary: '#C778DD',
      background: '#282C33',
    },
    extend: {
    },
  },
  plugins: [],
};

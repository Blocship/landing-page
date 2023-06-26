/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#011643",
      secondary: "#F9A920",
      'matt-black': "#19303D",
      'light-gradient': '#2BB7F6',
      'dark-gradient': '#04599C',
    },
  },
  plugins: [],
}

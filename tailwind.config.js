/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ubuntu-blue': '#003399',
        'ubuntu-orange': '#FF9900',
        'ubuntu-beige': '#E1DBD3',
        'ubuntu-earth': '#996137',
      },
      fontFamily: {
        'heading': ['League Spartan', 'sans-serif'],
        'body': ['Fredoka', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': '55px',
        'heading-lg': '28px',
        'body-base': '20px',
      }
    },
  },
  plugins: [],
}

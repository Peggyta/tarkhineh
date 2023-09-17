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
        'primary': '#417F56',
        'neutral': '#717171',
        'raven': '#353535',
        'ash': '#ededed',
        'cherry': '#c30000',
        'soft': '#fff2f2',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}
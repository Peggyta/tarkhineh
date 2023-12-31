/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      opacity: ['disabled'],
      colors: {
        'primary': '#417F56',
        'secondary': '#E5F2E9',
        'hovercolor': '#5bb379',
        'neutral': '#717171',
        'raven': '#353535',
        'ash': '#ededed',
        'cherry': '#c30000',
        'soft': '#fff2f2',
        'grass': '#1d291f',
        'bordercolor': '#cbcbcb',
        'hovercolor': '#5bb379',
        'tomato': '#c30000',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      spacing: {
        '7px': '7px',
        '10px': '10px',
        '20': '70px',
      },
      width: {
        '430': '430px',
        '470':'470px',
        '600': '600px',
        '500': '560px',
      },
      height: {
        '280': '280px',
        '496': '496px',
      },
      fontSize: {
        '4.5xl': '40px',
      },
    },
  },
  plugins: [],
}

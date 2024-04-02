/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '00': '#fff9ed',
          '01': '#fef8f4',
          '02': '#687076',
          '03': '#ece5e5'
        },
        black: {
          '00': '#211e1c',
          '01': '#11181C',
        },
        orange: {
          '00': '#ed5432',
          '01': '#f87216',
          '02': '#ed5332',
          '03': '#feeadd',
          '04': '#ed6a32'
        },
        yellow: {
          '00': '#eda232',
          '01': '#fcb60a'
        },
        brownShades: {
          '0007': 'rgba(248, 114, 22, .07)'
        }
      },
      screens: {
        'tablet-max': '840px',
        'tablet': '640px'
      }
    },
  },
  plugins: [],
}
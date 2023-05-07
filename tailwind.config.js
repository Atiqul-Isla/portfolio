/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(8px)',
      },
    },
  },
  variants: {
    backdropBlur: ['responsive'],
    backdropFilter: ['responsive'],
  },
  plugins: [],
}

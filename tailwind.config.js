/** @type {import('tailwindcss').Config} */
module.exports = ({
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito sans', 'sans-serif'],
        nun: ['Nunito sans'],
      },
      colors: {
        xiketic: '#060818',
      },
    },
  },

  plugins: [],
})

// tailwind.config.cjs
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false,
  theme: {
    colors: {
      white: colors.white,
      gray: colors.warmGray,
      'svelte-prime': '#ff5030',
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fb7185",
        
"secondary": "#fee2e2",
        
"accent": "#fca5a5",
        
"neutral": "#e5e7eb",
        
"base-100": "#FFFFFF",
        
"info": "#f43f5e",
        
"success": "#4b5563",
        
"warning": "#9ca3af",
        
"error": "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
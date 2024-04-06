/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff2079',
        'neon-orange': '#ff7e5f',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cinzel': ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(to right, #ff2079, #ff7e5f)',
      },
    },
  },
  plugins: [],
}

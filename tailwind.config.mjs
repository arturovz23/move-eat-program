/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        olive: {
          dark:   '#2E3820',
          DEFAULT:'#3D4A2E',
          mid:    '#5C6B47',
          sage:   '#A8B89A',
        },
        sand: {
          DEFAULT: '#C4B08A',
          light:   '#D9CEBC',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark:    '#E8E0D0',
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Lato', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Vedic palette ── */
        saffron: {
          50:  '#FFF8F0',
          100: '#FDECD4',
          200: '#FADAAB',
          300: '#F0C070',
          400: '#E8A020',  // turmeric highlight
          500: '#C9881A',  // temple gold accent
          600: '#A06B10',
          700: '#7A5008',
          800: '#5C3A04',
          900: '#2C1200',  // deep saffron-brown (hero bg)
          950: '#1C0F00',  // near-black warm brown (text)
        },
        kumkum: {
          300: '#C44040',
          500: '#8B1A1A',  // dividers, accents
          700: '#5C0E0E',
        },
        ivory:      '#FAF3E0',  // main background
        sandalwood: '#E8D5B0',  // secondary bg
        parchment:  '#F5EAD0',  // alt bg
        /* Keep gold alias for existing classes */
        gold: {
          50:  '#FFF8F0',
          100: '#FDECD4',
          200: '#FADAAB',
          300: '#F0C070',
          400: '#E8A020',
          500: '#C9881A',
          600: '#A06B10',
          700: '#7A5008',
          800: '#5C3A04',
          900: '#2C1200',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        highlight: 'var(--highlight)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        body: 'var(--body)',
        highlightText: 'var(--highlightText)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Mononoki', 'monospace'],
        openDyslexic: ['OpenDyslexic', 'sans-serif'],
        openDyslexicMono: ['OpenDyslexic Mono', 'monospace'],
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fill, minmax(auto, 420px))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

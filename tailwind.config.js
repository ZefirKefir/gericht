module.exports = {
  purge: ["./src/**/*/.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'sans-serif'],
      'opensans': ['Open Sans', 'sans-serif'],
      'fancy': ['Cormorant Upright', 'sans-serif'],
      'fancy-numbers': ['Cormorant Infant', 'sans-serif'],
    },
    extend: {
      screens: {
        'large': '1150px',
      },
      colors: {
        golden: {
          100: '#dcca87',
        },
        black: {
          100: '#0C0B08',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

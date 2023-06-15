/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif']
      },
      screens: {
        mobile: '360px',
        tablet: '768px',
        laptop: '1024px',
        xl: '1280px',
        '2x': '1536px',
        '3xl': '1920px' // tambahkan breakpoint 3xl
      }
    }
  },
  plugins: []
}

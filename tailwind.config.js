/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
<<<<<<< HEAD
    // "./node_modules/flowbite.{js,ts}"
=======
>>>>>>> 936ef73d3c5714625879eabf64afaf76af26772d
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px', // tambahkan breakpoint 3xl
      },
    },
  },
<<<<<<< HEAD
  plugins: [
    // require('flowbite')
  ],
=======
  plugins: [],
>>>>>>> 936ef73d3c5714625879eabf64afaf76af26772d
}


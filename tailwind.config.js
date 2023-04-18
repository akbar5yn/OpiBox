/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // tambahkan breakpoint 3xl
      },
    },
  },
  plugins: [
    require('flowbite')
  ],
}


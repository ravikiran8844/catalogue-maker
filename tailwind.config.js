/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')

  ],
}


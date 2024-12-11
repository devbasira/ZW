/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1800px': '1800px', // Custom width
      },
      screens: {
        '4k': '2560px', // Define a custom breakpoint for 4K screens
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
    }
  },
  plugins: [],
}


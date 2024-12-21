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
        '4k': '2560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        'ipad-pro': { min: '1024px', max: '1366px' },
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
    }
  },
  plugins: [],
}


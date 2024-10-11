/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        secondary: withOpacityValue('--text-secondary'),
        primary: withOpacityValue('--aisa-color-primary'),
        title_primary: {
          light: withOpacityValue('--color-primary-title'),
          DEFAULT: 'rgb(var(--color-primary-title))',
        },
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        base: 'var(--background-base)',
        // foreground: withOpacityValue('--background-foreground-rgb'),
        'app-bar': 'var(--background-app-bar)',
        // hover: 'var(--background-hover)',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: 'var(--foreground-divider)',
        divider: 'var(--foreground-divider)',
      }),
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
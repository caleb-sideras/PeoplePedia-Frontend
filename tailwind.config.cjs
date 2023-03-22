/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'd-grey' : '#1f1f1f',
        'm-grey' : '#2d2f31',
        'l-grey' : '#ffffff', //c4c7c5
        'd-blue' : '#4f46e5',
        'm-blue' : '#7f70ab'
      },
      safelist: [
        'animate-[fade-in_1s_ease-in-out]', 
        'animate-[fade-in-down_1s_ease-in-out]',
        'animate-[fade-in-up_1s_ease-in-out]',
        'animate-[slide-in-up_1s_ease-in-out]'
      ],
      animation: ['hover', 'group-hover', 'focus', 'responsive']
    },
    minHeight: {
      full: '500px',
    },
    maxHeight: {
      half: '50%'
    }
  },
  plugins: [require("tw-elements/dist/plugin")]
}

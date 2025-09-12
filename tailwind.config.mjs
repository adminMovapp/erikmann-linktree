/** @type {import('tailwindcss').Config} */
export default {
   theme: {
      extend: {
         // fontFamily: {
         //    montserrat: ['Montserrat', 'sans-serif'],
         // },

         colors: {
            primary: '#0b1223',
            secondary: '#0b2a63',
            font_color: '#F2F7FF',
            line: '#ffffff',

            // purple_mv: '#8149E2',
         },
      },
   },
   content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx}',
      './components/**/*.{astro,js,jsx,ts,tsx}',
      './layouts/**/*.{astro,js,jsx,ts,tsx}',
   ],
   plugins: [],
};

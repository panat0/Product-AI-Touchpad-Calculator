/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/flowbite/**/*.js',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnS: '#B936F5',
        btnG: '#F1005B',
        textS: '#C824EC',
        textG: '#DF308D',
        memberS: '#AA14F0',
        memberE: '#B936F5',
        cardnameS: '#AA14F0',
        cardnameE: '#F1005B',
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
    
  ],
  
}
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    colors: {
      primary: '#F2DC6B',
      secondary: '#F3F6FC',
      tertiary: '#F5F5F5',
      quaternary: '#0D0D0D',
      quinary: '#A7A7AC' ,
      other: '#00df9a',
      accent: '#1760BF',
      background: '#FFFFFF',
      alpha: '#e4cbf2',
      beta: '#f87f5b',
      gamma: '#97e4b2',
      
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      kanit: ['Kanit','sans-serif'],
      ubuntu: ['Ubuntu Mono', 'monospace']
    }
  },

  extend: {
    
   }
}


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-light-red': 'hsl(13, 100%, 72%)',
        'light-red': 'hsl(353, 100%, 62%)',
        'very-dark-blue' : 'hsl(208, 49%, 24%)',
        'very-dark-grayish': 'hsl(207, 13%, 34%)',
        'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'grayish': 'hsl(240, 2%, 79%)',
      },
      borderRadius:{
        '5xl': '80px',
      }
    },
  },
  plugins: [
  ],
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,njk,css,js,json}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      // xs: '375px', // (goiteens)
      sm: '480px',
      md: '768px',
      xl: '1280px',
      xxl: '1600px', // (goiteens)
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    // BASE FONT
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'], // class="font-montserrat"
      gotham: ['Gotham', 'sans-serif'], // class="font-gotham" (goiteens)
      IBMPlexMono: ['IBMPlexMono', 'sans-serif'], // class="font-IBMPlexMono"
      IBMPlexSans: ['IBMPlexSans', 'sans-serif'], // class="font-IBMPlexSans"
      // exo: ['"Exo 2"', 'sans-serif'],
    },
    // SHADOW
    boxShadow: {
      orange: '2px 8px 29px rgba(240, 127, 46, 0.2)', // class="shadow-orange"
      gray: '0px 1px 3px 0px rgba(0, 0, 0, 0.20)',
    },
    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        check: "url('../images/components/agree-checkbox.svg')",
      },
      // ALL COLORS
      colors: {
        body: '#ffffff', // class="bg-body"
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          light: '#202020', // class="bg-black-light text-black-light border-black-light"
          dark: '#010101', // class="bg-black-dark text-black-dark border-black-dark"
          extralight: '#6E6E6E',
          '1A': '#1A1A1A',
          47: '#474747',
        },
        white: {
          DEFAULT: '#ffffff', // class="bg-white text-white border-white"
          dark: '#fafafa', // class="bg-white-dark text-white-dark border-white-dark"
        },
        purple: {
          DEFAULT: '#5331B2', // hero bg, button main color
          light: '#C2B0F5', // carousel btn
          dark: '#452994', // button hover-focus
          active: '#8160E0', // button active
        },
        accent: '#2E43A4', // class="bg-accent text-accent border-accent"
        primary: '#f1f1f1',
        second: '#f2f2f2',
        'green-61': '#B0E061',
        'green-32': '#82B232',
        'gray-ED': '#EDEDED',
        'gray-E0': '#E0E0E0',
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem', // 1.25rem (goiteens)
          sm: '1.25rem', // 1.25rem (goiteens)
          md: '2rem', // 2rem (goiteens)
          xl: '2rem', // 2.5rem (goiteens)
          xxl: '3.5rem', // (goiteens)
        },
      },
      // KEYFRAMES
      keyframes: {
        side: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: ' translateY(0)' },
        },
      },
      // ANIMATION
      animation: {
        side: 'side 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

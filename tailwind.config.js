/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#DFF9FF',
          100: '#B4F1FF',
          200: '#77E5FF',
          300: '#32D8FF',
          400: '#2EC7EB',
          500: '#29B2D1',
          600: '#249CB8',
          700: '#1F869E',
          800: '#1A7185',
          900: '#155A6A',
          1000: 'linear-gradient(90deg, rgba(217, 217, 217, 0.00) 0%, #155A6A 100%)'
        },
        'gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2A37',
          900: '#111928',
        },
        'blue': {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#3F83F8',
          600: '#1C64F2',
          700: '#1A56DB',
          800: '#1E429F',
          900: '#233876',
        },
        'red': {
          50: '#FDF2F2',
          100: '#FDE8E8',
          200: '#FBD5D5',
          300: '#F8B4B4',
          400: '#F98080',
          500: '#F05252',
          600: '#E02424',
          700: '#C81E1E',
          800: '#9B1C1C',
          900: '#771D1D',
        },
        'yellow': {
          50: '#FDFDEA',
          100: '#FDF6B2',
          200: '#FCE96A',
          300: '#FACA15',
          400: '#E3A008',
          500: '#C27803',
          600: '#9F580A',
          700: '#8E4B10',
          800: '#723B13',
          900: '#633112',
        },
        'green': {
          50: '#F3FAF7',
          100: '#DEF7EC',
          200: '#BCF0DA',
          300: '#84E1BC',
          400: '#31C48D',
          500: '#0E9F6E',
          600: '#057A55',
          700: '#046C4E',
          800: '#03543F',
          900: '#014737',
        },
        'purple': {
          50: '#F6F5FF',
          100: '#EDEBFE',
          200: '#DCD7FE',
          300: '#CABFFD',
          400: '#AC94FA',
          500: '#9061F9',
          600: '#7E3AF2',
          700: '#6C2BD9',
          800: '#5521B5',
          900: '#4A1D96',
        },
        'pink': {
          50: '#FDF2F8',
          100: '#FCE8F3',
          200: '#FAD1E8',
          300: '#F8B4D9',
          400: '#CD78B2',
          500: '#E74694',
          600: '#D61F69',
          700: '#BF125D',
          800: '#99154B',
          900: '#751A3D',
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}


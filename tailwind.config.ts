import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        light: '#EAF0FF',
        dark: '#091227',
      },
    },
    container: {
      center: true,
    },
  },
}

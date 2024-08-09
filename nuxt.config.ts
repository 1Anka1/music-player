// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@vaxee/nuxt', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-08-09',
  tailwindcss: {
    config: {
      content: ['./app/**/*.vue'],
    },
  },
})

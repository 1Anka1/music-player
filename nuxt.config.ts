// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
})

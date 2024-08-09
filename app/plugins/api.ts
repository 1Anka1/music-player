export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: 'https://api.deezer.com',
  })

  return {
    provide: {
      api,
    },
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true 
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxtjs/i18n' 
  ],
  i18n: {
    vueI18n: './i18n'
  }
});

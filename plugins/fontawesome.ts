import getFontawesome from "~/icons/fontawesome";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-aw', getFontawesome());
});
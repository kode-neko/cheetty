import { FontAwesomeIcon } from '../icons/fontawesome';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-aw', FontAwesomeIcon);
});

export { FontAwesomeIcon };
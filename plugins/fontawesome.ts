import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faCodepen, faFigma, faGitAlt, faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars, faBolt, faCirclePlus, faDoorOpen, faEnvelope, faMagnifyingGlass, faPencil, faShare, faTrash, faXmark, faXmarkCircle 
} from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faCirclePlus, faPencil, faXmark, faMagnifyingGlass, faBars, faDoorOpen, faShare, faEnvelope, faTrash, faXmarkCircle, faTwitter, faGitAlt, faCodepen, faBolt, faFigma);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-aw', FontAwesomeIcon);
});
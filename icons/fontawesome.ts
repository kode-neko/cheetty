import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faCodepen, faFigma, faGitAlt, faTwitter, faGithubAlt 
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars, faBolt, faCirclePlus, faDoorOpen, faEnvelope, faMagnifyingGlass, faPencil, faPlus, faShareNodes, faTrash, faXmark, faXmarkCircle 
} from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

function getFontawesome() {
  config.autoAddCss = false;
  library.add(faCirclePlus, faPencil, faXmark, faMagnifyingGlass, faBars, faDoorOpen, faShareNodes, faEnvelope, faTrash, faXmarkCircle, faTwitter, faGitAlt, faCodepen, faBolt, faFigma, faGithubAlt, faPlus);
  return FontAwesomeIcon;
}

export default getFontawesome;
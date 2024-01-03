import { defineStore } from 'pinia';

export default defineStore('global', () => {
  const mainTitle = 'Cheetty';
  const mainFooter = 'Kodeneko @ 2024';

  return {
    mainTitle,
    mainFooter
  };
});
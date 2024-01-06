import { defineStore } from 'pinia';
import type { Link } from '~/models';

export default defineStore('global', () => {

  // Main
  const mainTitle = 'Cheetty';
  const mainFooter = 'Kodeneko @ 2024';

  // Social
  const twitter: Link = {
    name: 'twitter',
    path: '',
    icon: 'fa-brands fa-twitter',
    alt: ''
  };
  const github: Link = {
    name: 'github',
    path: '',
    icon: 'fa-brands fa-github-alt',
    alt: ''
  };
  const codepen: Link = {
    name: 'codepen',
    path: '',
    icon: 'fa-brands fa-codepen',
    alt: ''
  };
  const stackblitz: Link = {
    name: 'stackblitz',
    path: '',
    icon: 'fa-solid fa-bolt',
    alt: ''
  };
  const figma: Link = {
    name: 'figma',
    path: '',
    icon: 'fa-brands fa-figma',
    alt: ''
  };
  const socialList = [
    twitter,
    github,
    codepen,
    stackblitz,
    figma
  ];

  return {
    mainTitle,
    mainFooter,

    socialList
  };
});
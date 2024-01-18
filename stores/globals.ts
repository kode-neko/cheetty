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
  const socialList: Link[] = [
    twitter,
    github,
    codepen,
    stackblitz,
    figma
  ];

  // Menu Opts
  const create = {
    name: 'create',
    path: '',
    icon: 'fa-solid fa-circle-plus',
    alt: ''
  };
  const social = {
    name: 'social',
    links: socialList
  };
  const contact = {
    name: 'contact',
    path: '',
    icon: 'fa-solid fa-envelope',
    alt: ''
  };
  const logout = {
    name: 'logout',
    path: '',
    icon: 'fa-solid fa-door-open',
    alt: ''
  };
  const linksKey = {
    create,
    contact,
    logout
  };
  const menuLinks: Link[] = [
    create,
    social,
    contact,
    logout
  ];

  // const tagPattern = /^((\w+,?)|(\w+,{1}\s?)*|(\w+,{1}\s{1}\w*)*)$/;
  const tagPattern = /^(\w+\s*)*$/;

  return {
    mainTitle,
    mainFooter,

    socialList,
    linksKey,
    menuLinks,
    
    tagPattern
  };
});
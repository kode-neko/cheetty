import en from './en';
import es from './es';

export default defineI18nConfig(() => ({
  legacy: false,
  fallback: 'en',
  locale: 'en',
  messages: {
    en, es
  }
}));
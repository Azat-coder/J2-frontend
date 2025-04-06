import { createI18n } from 'vue-i18n';
import { LOCALES, messages } from './constants';
import type { MessagesScheme } from './types';

export const i18n = createI18n<[MessagesScheme], LOCALES>({
  legacy: false,
  inheritLocale: true,
  locale: LOCALES.RU,
  fallbackLocale: LOCALES.RU,
  messages,
});

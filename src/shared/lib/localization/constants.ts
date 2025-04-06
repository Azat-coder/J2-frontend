import enUs from './messages/en-US.json';
import ruRu from './messages/ru-RU.json';

export enum LOCALES {
  EN = 'en-US',
  RU = 'ru-RU',
}

export const messages = {
  [LOCALES.EN]: enUs,
  [LOCALES.RU]: ruRu,
};

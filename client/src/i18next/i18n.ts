import i18n from "i18next"
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { en } from "../../public/languages/en/translation";
import { de } from "../../public/languages/de/translation";
import { uk } from "../../public/languages/uk/translation";

const resources = {
    en: { translation: en },
    de: { translation: de },
    uk: { translation: uk },
  };

i18n
  .use(Backend)
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'uk', 'de'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
  });

export default i18n;
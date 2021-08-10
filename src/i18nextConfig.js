import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './assets/locals/en/translation.json'
import translationRU from './assets/locals/ru/translation.json'
import translationUA from './assets/locals/ua/translation.json'

const fallbackLng = ['en']
const availableLanguages = ['en', 'ru', 'ua']

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    },
    ua: {
        translation: translationUA
    }
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,

        detection: {
            checkWhitelist: true,
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false,
        }
    })
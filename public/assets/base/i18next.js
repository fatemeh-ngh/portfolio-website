import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap/dist/css/bootstrap.min.css';


    i18next
        .use(LanguageDetector)
        .use(HttpApi)
        .use(initReactI18next)
    .init({
        supportedLngs:['en', 'fa'],
        fallbackLng: "en",
        detection: {
            order: ['htmlTag', 'path', 'cookie', 'localStorage', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        }
    })




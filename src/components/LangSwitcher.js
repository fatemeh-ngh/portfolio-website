import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    detection: {
        order: [ 'htmlTag','querystring', 'cookie', 'localStorage',
         'sessionStorage', 'navigator',
          'path', 'subdomain'],
        caches: ['cookie']
    }
  });

function LangSwitcher() {
  const { t } = useTranslation();

  return <h2>{t('Welcome')}</h2>;
}

export default LangSwitcher;


// const LangSwitcher = () => {
//     return (
//         <div>
//             <select placeholder='choose your language'>
//                 <option value="eng">English</option>
//                 <option value="fa">فارسی</option>
//             </select>
//         </div>
//     );
// };

// export default LangSwitcher;
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//Components
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import Searchbox from './Searchbox';

//Styles 
import styles from '../sass/Navbar.module.scss';
import '../base/_main.scss'

//Context
import {Themecontext} from '../contexts/ThemeContext';

//Hook
import { useTranslation} from "react-i18next";
// import i18next from "i18next";
// import HttpApi from 'i18next-http-backend';
// // import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// i18next
// .use(LanguageDetector)
// .use(HttpApi)
// .use(initReactI18next)
// .init({
// debug: true,
// supportedLngs:['en', 'fa'],
// fallbackLng: 'en',
// detection: {
//     order: ['cookie', 'path', 'htmlTag', 'localStorage', 'subdomain'],
//     caches: ['cookie']
// },
// backend: {
//     loadPath: '../../public/assets/locales/{{lng}}/translation.json',
// },
// react:{
//     useSuspense: false
// }
// });
//


const Navbar = () => {
    const {t} = useTranslation();

    const [theme] = useContext(Themecontext);

    return (
        <div className={`${styles.container} ${theme}`}>
            <div className={styles.socilaContainer}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
            <div className={styles.linkContainer}>
                <Link to="/">{t("Home")}</Link>
                <Link to="/portfolio">{t("Portfolio")}</Link>
                <Link to="/blog">{t("Blog")}</Link>
                <Link to="/shop">{t("Shop")}</Link>
                <Link to="/contact">{t("Contact")}</Link>
            </div>
            <Searchbox/>
        </div>
    );
};

export default Navbar;
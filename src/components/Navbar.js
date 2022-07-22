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

const Navbar = () => {
    const {t, i18n} = useTranslation();

    const [theme] = useContext(Themecontext);

    return (
        <div className={`${styles.container} ${theme} ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
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
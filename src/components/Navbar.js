import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//Components
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import HambergerMenu from './HambergerMenu';
// import Searchbox from './Searchbox';

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
        <div className={`${styles.container} ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
            <div className={styles.switcherContainer}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
            <div className={styles.linkContainer}>
                <Link to="/contact">{t("Contact")}</Link><span> </span>
                <Link to="/blog">{t("Blog")}</Link><span> </span>
                <Link to="/shop">{t("Shop")}</Link><span> </span>
                <Link to="/portfolio">{t("Portfolio")}</Link><span> </span>
                <Link to="/">{t("Home")}</Link><span></span>
            </div>
            <HambergerMenu/>
        </div>
    );
};

export default Navbar;
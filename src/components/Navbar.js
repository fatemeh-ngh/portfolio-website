import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';

//Components
import ThemeSwitcher from './ThemeSwitcher'; 
import LangSwitcher from './LangSwitcher';
import HambergerMenu from './HambergerMenu';

//Styles 
import styles from '../sass/Navbar.module.scss';
import '../base/_main.scss'

//Context
import {Themecontext} from '../contexts/ThemeContext';

//Hook
import { useTranslation} from "react-i18next";
import { useEffect } from 'react';


const Navbar = () => {

    const {t, i18n} = useTranslation();
    const [theme] = useContext(Themecontext);
    const [scroll, setScroll] = useState(false);

    const changBackground = () => {
        console.log(window.scrollY)
        if(window.scrollY >= 66 ) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changBackground();
        window.addEventListener("scroll", changBackground)
    })

    return (
        <div className={`
        ${styles.container} 
        ${
            scroll && `${theme === "dark" ? styles.dark : styles.light}`
        }
        ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
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
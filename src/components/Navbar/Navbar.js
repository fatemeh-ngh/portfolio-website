import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

//Components 
import LangSwitcher from './Lang/LangSwitcher';
import HambergerMenu from './HambergerMenu/HambergerMenu';

//Styles 
import styles from './Navbar.module.scss';

//Context
import {ScrollContext} from '../../contexts/ScrollContext';

//Hook
import { useTranslation} from "react-i18next";


const Navbar = () => {

    const {t, i18n} = useTranslation();
    const [scroll] = useContext(ScrollContext);

    return (
        <>
            <div className={`
            ${styles.container} 
            ${scroll && `${styles.scroll}`}
            ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
                <div className={styles.switcherContainer}>
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
        </>
    );
};

export default Navbar;
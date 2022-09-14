import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

//Styles
import styles from './Hamber.module.scss';

//Hook
import { useTranslation} from "react-i18next";

//Context
import { ScrollContext } from '../../../contexts/ScrollContext';

const HambergerMenu = () => {

    const {t, i18n} = useTranslation();
    const [open, setOpen] = useState('false')
    const [scroll] = useContext(ScrollContext);

    return (
        <div className={`
        ${styles.cotainer}
        ${scroll ? styles.scroll : styles.notScroll}
        ${!open && styles.open}
        ${i18n.language === 'fa' && styles.farsi}
        `}>
            <div className={styles.icon} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.MenuContainer}>
                <Link to="/contact">{t("Contact")}</Link>
                <Link to="/blog">{t("Blog")}</Link>
                <Link to="/shop">{t("Shop")}</Link>
                <Link to="/portfolio">{t("Portfolio")}</Link>
                <Link to="/">{t("Home")}</Link>
            </div>
        </div>
    );
};

export default HambergerMenu;
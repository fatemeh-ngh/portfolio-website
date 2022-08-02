import React, {useState} from 'react';
import styles from '../sass/Hamber.module.scss'
import { Link } from 'react-router-dom';

//Hook
import { useTranslation} from "react-i18next";

const HambergerMenu = () => {

    const {t} = useTranslation();
    const [open, setOpen] = useState('false')
    return (
        <div className={`${styles.cotainer} ${!open && styles.open}`}>
            <div className={styles.icon} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.MenuContainer}>
                <Link to="/contact">{t("Contact")}</Link><span> </span>
                <Link to="/blog">{t("Blog")}</Link><span> </span>
                <Link to="/shop">{t("Shop")}</Link><span> </span>
                <Link to="/portfolio">{t("Portfolio")}</Link><span> </span>
                <Link to="/">{t("Home")}</Link><span></span>
            </div>
        </div>
    );
};

export default HambergerMenu;
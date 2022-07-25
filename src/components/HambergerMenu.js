import React, {useState} from 'react';
import styles from '../sass/Hamber.module.scss'
import { Link } from 'react-router-dom';

//Hook
import { useTranslation} from "react-i18next";


const HambergerMenu = () => {

    const {t, i18n} = useTranslation();
    const [open, setOpen] = useState('true')
    const MenuHandler= () => {
        setOpen(!open);

    }
    
    return (
        <div onClick={MenuHandler} className={styles.cotainer}>
            <div className={`${styles.icon} ${open ? styles.close : styles.open}`}>
                <span className={styles.ihamber1}></span>
                <span className={styles.ihamber2}></span>
                <span className={styles.ihamber3}></span>
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
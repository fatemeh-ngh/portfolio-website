import React,{useContext} from 'react';
import { Card, Button } from 'react-bootstrap';
//Styles
import styles from '../sass/Portfolio.module.scss'

//Images
import shopcart from '../assets/images/shopcart.png';
import currency from '../assets/images/currency.png'
//Hook
import { useTranslation } from 'react-i18next';
//Context
import {Themecontext} from '../contexts/ThemeContext';

const Portfolio = () => {

    const {t , i18n} = useTranslation();
    const [theme] = useContext(Themecontext);


    return (
        <div className={`
        ${styles.mainContainer}
        ${theme === "dark" ? styles.dark : styles.light} 
        ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
            <div className={`${styles.header}`}>
                <h1>{t("works")}</h1>
            </div>
            <div className={`${styles.container}`}>
                <div className={styles.item}>
                    <a target={"-blank"} href="https://celadon-ganache-50d36d.netlify.app/products">
                        <img src={shopcart} alt="shopcart" />
                        <h4>{t("shopcart")}</h4>
                    </a>
                    <p>{t("ashopcart")}</p>
                </div>
                <div className={styles.item}>
                    <a target={"-blank"} href="https://stupendous-truffle-5fdb3d.netlify.app/">
                        <img src={currency} alt="currency" />
                        <h4>{t("currency")}</h4>
                    </a>
                    <p>{t("acurrency")}</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>{t("currency")}</h4>
                    </a>
                    <p>{t("acurrency")}</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>{t("currency")}</h4>
                    </a>
                    <p>{t("acurrency")}</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>{t("currency")}</h4>
                    </a>
                    <p>{t("acurrency")}</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>{t("currency")}</h4>
                    </a>
                    <p>{t("acurrency")}</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
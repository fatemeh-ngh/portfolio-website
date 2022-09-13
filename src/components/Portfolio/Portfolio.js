import React,{useContext} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Styles
import styles from './Portfolio.module.scss'

//Images
import shopcart from '../../assets/images/shopcart.png';
// import currency from '../../assets/images/currency.png';

//Hook
import { useTranslation } from 'react-i18next';

//Context
import {ScrollContext} from '../../contexts/ScrollContext';


const Portfolio = () => {

    // const {t , i18n} = useTranslation();


    return (
        <Container fluid className={styles.container}>
            <Row className={styles.titleContainer}>
                <span>PORTFOLIO</span>
                <p>Featured Works</p>
            </Row>
            <Row className={styles.bottomContainer}>
                <Row className={styles.filterContainer}>
                    <ul>
                        <li><a href="./">All</a></li>
                        <li><a href="./">Design</a></li>
                        <li><a href="./">Branding</a></li>
                        <li><a href="./">Photography</a></li>
                    </ul>
                </Row>
                <Row className={styles.imageContainer}>
                    <Col><a href="./"><img src={shopcart} alt="shopcart" /></a></Col>
                    <Col><a href="./"><img src={shopcart} alt="shopcart" /></a></Col>
                    <Col><a href="./"><img src={shopcart} alt="shopcart" /></a></Col>
                    <Col><a href="./"><img src={shopcart} alt="shopcart" /></a></Col>
                    <Col><a href="./"><img src={shopcart} alt="shopcart" /></a></Col>
                    <Col><a href="./"><img src={shopcart} alt="shopcart" /></a></Col>
                </Row>
            </Row>
        </Container>
        // <div className={`${styles.mainContainer} ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
        //     <div className={`${styles.header}`}>
        //         <h1>{t("works")}</h1>
        //     </div>
        //     <div className={`${styles.container}`}>
        //         <div className={styles.item}>
        //             <a target={"-blank"} href="https://celadon-ganache-50d36d.netlify.app/products">
        //                 <img src={shopcart} alt="shopcart" />
        //                 <h4>{t("shopcart")}</h4>
        //             </a>
        //             <p>{t("ashopcart")}</p>
        //         </div>
        //         <div className={styles.item}>
        //             <a target={"-blank"} href="https://stupendous-truffle-5fdb3d.netlify.app/">
        //                 <img src={currency} alt="currency" />
        //                 <h4>{t("currency")}</h4>
        //             </a>
        //             <p>{t("acurrency")}</p>
        //         </div>
        //         <div className={styles.item}>
        //             <a href="#">
        //                 <img src={currency} alt="currency" />
        //                 <h4>{t("currency")}</h4>
        //             </a>
        //             <p>{t("acurrency")}</p>
        //         </div>
        //         <div className={styles.item}>
        //             <a href="#">
        //                 <img src={currency} alt="currency" />
        //                 <h4>{t("currency")}</h4>
        //             </a>
        //             <p>{t("acurrency")}</p>
        //         </div>
        //         <div className={styles.item}>
        //             <a href="#">
        //                 <img src={currency} alt="currency" />
        //                 <h4>{t("currency")}</h4>
        //             </a>
        //             <p>{t("acurrency")}</p>
        //         </div>
        //         <div className={styles.item}>
        //             <a href="#">
        //                 <img src={currency} alt="currency" />
        //                 <h4>{t("currency")}</h4>
        //             </a>
        //             <p>{t("acurrency")}</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Portfolio;
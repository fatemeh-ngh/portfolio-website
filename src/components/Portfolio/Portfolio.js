import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Styles
import styles from './Portfolio.module.scss'

//Images
import shopcart from '../../assets/images/shopcart.png';
import currency from '../../assets/images/currency.png';

//Hook
import { useTranslation } from 'react-i18next';

const Portfolio = () => {

    const {t , i18n} = useTranslation();


    return (
        <Container fluid className={`${styles.container} ${i18n.language === 'fa' && styles.farsi}`}>
            <Row className={styles.titleContainer}>
                <p>{t("practiceprojects")}</p>
            </Row>
            <Row className={styles.bottomContainer}>
                <Row className={styles.imageContainer}>
                    <Col><a href="https://stupendous-truffle-5fdb3d.netlify.app/" rel="noreferrer" target={'_blank'}><img src={currency} alt="shopcart" /></a></Col>
                    <Col><a href="https://celadon-ganache-50d36d.netlify.app/products" rel="noreferrer" target={'_blank'}><img src={shopcart} alt="shopcart" /></a></Col>
                    <Col><a href="https://stupendous-truffle-5fdb3d.netlify.app/" rel="noreferrer" target={'_blank'}><img src={currency} alt="shopcart" /></a></Col>
                    <Col><a href="https://celadon-ganache-50d36d.netlify.app/products" rel="noreferrer" target={'_blank'}><img src={shopcart} alt="shopcart" /></a></Col>
                    <Col><a href="https://stupendous-truffle-5fdb3d.netlify.app/" rel="noreferrer" target={'_blank'}><img src={currency} alt="shopcart" /></a></Col>
                    <Col><a href="https://celadon-ganache-50d36d.netlify.app/products" rel="noreferrer" target={'_blank'}><img src={shopcart} alt="shopcart" /></a></Col>
                </Row>
            </Row>
        </Container>
    );
};

export default Portfolio;
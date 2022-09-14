import React from 'react';
import { Carousel, Container, Col, Row } from 'react-bootstrap';
import styles from './Slider.module.scss'
 
//Image
import item1 from '../../../assets/images/background (2).jpg';
import item2 from '../../../assets/images/background.jpg';
// import item3 from '../../../assets/images/shopcart.png';
// import item4 from '../../../assets/images/currency.png';

//Hook
import { useTranslation} from "react-i18next";

const Slider = () => {

    const {t, i18n} = useTranslation();

    return (
        <Container className={`${styles.container} ${i18n.language === 'fa' && styles.farsi}`}>
                <span>{t("PORTFOLIO")}</span>
                <Carousel fade className={styles.Carousel}>
                <Carousel.Item>
                    <img className='w-100' src={item1} alt="item1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={item2} alt="item2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={item1} alt="item3" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='w-100' src={item2} alt="item4" />
                </Carousel.Item>
            </Carousel>
            <p><a href="./portfolio">{t("Seemore")}</a></p>
        </Container>
    );
};

export default Slider;
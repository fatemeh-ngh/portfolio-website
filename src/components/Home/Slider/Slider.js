import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import styles from './Slider.module.scss'

//Image
import item1 from '../../../assets/images/background (2).jpg';
import item2 from '../../../assets/images/background.jpg';
import item3 from '../../../assets/images/background3.jpg';
import item4 from '../../../assets/images/currency.png';

//Hook
import { useTranslation} from "react-i18next";

const Slider = () => {

    const {t, i18n} = useTranslation();

    return (
        <Container className={styles.container} dir={`${i18n.language === 'en' ? "ltr" : "rtl"}`}>
            <span>{t("PORTFOLIO")}</span>
            <Carousel fade className={styles.carousel}>
                <Carousel.Item className={styles.item}>
                    <img className='w-100' src={item1} alt="item1" />
                </Carousel.Item>
                <Carousel.Item className={styles.item}>
                    <img className='w-100' src={item2} alt="item2" />
                </Carousel.Item>
                <Carousel.Item className={styles.item}>
                    <img className='w-100' src={item3} alt="item3" />
                </Carousel.Item>
                {/* <Carousel.Item className={styles.item}>
                    <img className={styles.item} src={item4} alt="item4" />
                </Carousel.Item> */}
            </Carousel>
            <p><a href="./portfolio">{t("Seemore")}</a></p>
        </Container>
    );
};

export default Slider;
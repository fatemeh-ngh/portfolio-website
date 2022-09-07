import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Component
import Aboute from './Aboute';
import Services from './Services';

//image
import img from '../assets/images/background.jpg'

// Context
import {Themecontext} from '../contexts/ThemeContext';

//Styles
import styles from '../sass/Home.module.scss';
//Hook
import { useTranslation} from "react-i18next";
// ${theme} 
// ${i18n.language === 'en' ? styles.english : styles.farsi}

const Home = () => {

        const [theme] = useContext(Themecontext);
        const {t, i18n} = useTranslation();

        return (
        <Container fluid className={`
            ${styles.container} 
            ${i18n.language === 'en' ? styles.english : styles.farsi}
        `}>
            <div className={styles.mainContainer}>
   
                {/* <div className={styles.textContainer}> */}
                {/* <p>{t("INTRODUCTION")}</p> */}
                {/* <h1>{t("name")}</h1>
                <h4>{t("job")}</h4>
                <p>{t("about")}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <a className={styles.button} href={p} download>{t("downloadcv")}</a>
                    <Link className={styles.link} to='/contact'>{t("Contact")}</Link>
                </div> */}
            </div>
            <div className='content'>
                    <div className='image'>
                        <img src={img} style={{width: '170px',height: "170px", borderRadius: "50%"}} alt="person" />
                    </div>
                    <div className='name'>
                        <h3>FATEMEH<span>Negahdari</span></h3>
                    </div>
                    <div className='skill'>
                        <p>

                        </p>
                    </div>
                </div>
        </Container>
    );
};

export default Home;
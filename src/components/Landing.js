import React from 'react';

//image
import img from '../assets/images/background.jpg'

//Styles
import styles from '../sass/Landing.module.scss'
import { useTranslation} from "react-i18next";
import Typewriter from 'typewriter-effect';

const Landing = () => {
    const {t, i18n} = useTranslation();
    return (
        <div>
            <div className={styles.bcakground}></div>
            <div className={styles.content}>
                    <img src={img} style={{width: '170px',height: "170px", borderRadius: "50%"}} alt="person" />
                    <h3 className={styles.name}>{t("name")} <span>{t("lastname")}</span></h3>
                    <p style={{color: '#fff'}} className={styles.skill}>
                        I Know :  
                        <Typewriter 
                        options={{strings: ['React', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript'],
                        autoStart: true,
                        loop: true,}}
                        />
                    </p>
            </div>
            <a href='#about' class={styles.arrow}>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    );
};

export default Landing;
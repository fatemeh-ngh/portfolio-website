import React from 'react';
import Typewriter from 'typewriter-effect';

//image
import img from '../../../assets/images/woman.png';

//Styles
import styles from './Landing.module.scss';

//Hook
import { useTranslation} from "react-i18next";

const Landing = () => {
    const {t, i18n} = useTranslation();
    return (
        <div>
            <div className={styles.bcakground}></div>
            <div className={`${styles.content} ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
                    <img src={img} style={{width: '170px',height: "170px", borderRadius: "50%"}} alt="person" />
                    <h3 className={styles.name}>{t("name")} <span>{t("lastname")}</span></h3>
                    <p style={{color: '#fff'}} className={styles.skill}>
                        {t("iknow")} : <span>
                        {i18n.language === 'en' ?
                        <Typewriter 
                        options={{strings: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React.js', 'SCSS', 'Restfull API', 'Axios', 'Redux', 'SPA', 'Git'],
                        autoStart: true,
                        loop: true,}}/>          
                        : 
                        <Typewriter 
                        options={{strings: ['اچ تی ام ال', 'سی اس اس', 'بوت استرپ', 'جاوا اسکریپت', 'ريكت', 'اکسیوس', 'ریداکس', 'اپليكيشن های تک صفحه ای', 'گیت'],
                        autoStart: true,
                        loop: true,}}/>  
                        }   
                        </span>
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
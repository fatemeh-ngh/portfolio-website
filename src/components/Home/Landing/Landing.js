import React from 'react';
import Typewriter from 'typewriter-effect';

//image
// import img from '../../../assets/images/background.jpg';

//Styles
import styles from './Landing.module.scss';

//Hook
import { useTranslation} from "react-i18next";

const Landing = () => {
    const {t, i18n} = useTranslation();
    return (
        <div>
            <div className={styles.bcakground}></div>
            <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'} className={styles.content}>
                    {/* <img src={img} style={{width: '170px',height: "170px", borderRadius: "50%"}} alt="person" /> */}
                    <h3 className={styles.name}>{t("name")} <span>{t("lastname")}</span></h3>
                    <p style={{color: '#fff'}} className={styles.skill}>
                        {t("iknow")} : <span>
                        {i18n.language === 'en' ?
                        <Typewriter 
                        options={{strings: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React.js', 'TypeScript', 'Material Ui'],
                        autoStart: true,
                        loop: true,}}/>          
                        : 
                        <Typewriter 
                        options={{strings: ['اچ تی ام ال', 'سی اس اس', 'بوت استرپ', 'جاوا اسکریپت', 'ريكت', 'تايپ اسكريپت', 'متريال يوآی'],
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
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//Images
// import background from "../assets/images/background.jpg";
// import styled from 'styled-components';

//Context
// import {Themecontext} from '../contexts/ThemeContext';

//Styles
import styles from '../sass/Home.module.scss';

//Hook
import { useTranslation} from "react-i18next";
// ${theme} 
// ${i18n.language === 'en' ? styles.english : styles.farsi}

const Home = () => {

        // const [theme,] = useContext(Themecontext);
        const {t, i18n} = useTranslation();

        return (
        <div className={`${styles.container} ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                {/* <p>{t("INTRODUCTION")}</p> */}
                <h1>{t("name")}</h1>
                <h2>{t("job")}</h2>
                <p>{t("about")}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button>{t("downloadcv")}</button>
                    <Link to='/contact'>{t("Contact")}</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React,{useContext} from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Component
import Aboute from './Aboute';
import Services from './Services';
import Landing from './Landing';

// Context
// import {Themecontext} from '../contexts/ThemeContext';

//Styles
// import styles from '../sass/Home.module.scss';
//Hook
// import { useTranslation} from "react-i18next";


const Home = () => {
        // const [theme] = useContext(Themecontext);
        // const {t, i18n} = useTranslation();
        return (
        <div>
            <Landing/>
            <Aboute/>
            <Services/>
        </div>
    );
};

export default Home;
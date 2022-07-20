import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//Components
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import Searchbox from './Searchbox';

//Styles 
import styles from '../sass/Navbar.module.scss';
import '../base/_main.scss'

//Context
import {Themecontext} from '../contexts/ThemeContext';

const Navbar = () => {

    const [theme, setTheme] = useContext(Themecontext);

    return (
        <div className={`${styles.container} ${theme}`}>
            <div className={styles.socilaContainer}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
            <div className={styles.linkContainer}>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <Searchbox/>
        </div>
    );
};

export default Navbar;
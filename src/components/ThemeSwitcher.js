import React, { useContext } from 'react';


//Styles
import styles from '../sass/ThemeSwitche.module.scss'

//Context
import {Themecontext} from '../contexts/ThemeContext';

const ThemeSwitcher = () => {

    const [ , setTheme] = useContext(Themecontext);

    return (
        <div className={styles.container}>
            <button onClick={() => setTheme('light')}></button>
            <button onClick={() => setTheme('dark')}></button>
            <button onClick={() => setTheme('blue')}></button>
        </div>
    );
};

export default ThemeSwitcher;
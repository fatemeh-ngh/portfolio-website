import React from 'react';
import { Link } from 'react-router-dom';

//Styles 
import styles from'../assets/styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.socilaContainer}>
                <select name="" id="">
                    <option value="dark">dark</option>
                    <option value="light">light</option>
                    <option value="blue">blue</option>
                </select>
                <select placeholder='choose your language'>
                    <option value="eng">English</option>
                    <option value="fa">فارسی</option>
                </select>
            </div>
            <div className={styles.linkContainer}>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                <input type="text" />
            </div>
        </div>
    );
};

export default Navbar;
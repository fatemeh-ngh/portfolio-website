import React from 'react';
import { Link } from 'react-router-dom';

//Styles 
import styles from'../assets/styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.socilaContainer}>
                <p>FN<span>.</span></p>
            </div>
            <div className={styles.linkContainer}>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
            </div>

        </div>
    );
};

export default Navbar;
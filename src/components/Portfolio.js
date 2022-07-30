import React from 'react';

//Styles
import styles from '../sass/Portfolio.module.scss'

//Images
import shopcart from '../assets/images/shopcart.png';
import currency from '../assets/images/currency.png'

const Portfolio = () => {
    return (
        <div className={styles.mainContainer}>
            <div>
                <h1> نمونه كار هاي من </h1>
            </div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <a href="#">
                        <img src={shopcart} alt="shopcart" />
                        <h4>shopping cart</h4>
                    </a>
                    <p>a simple shopping cart</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>digital currency</h4>
                    </a>
                    <p>showing the price of digital currencies</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>digital currency</h4>
                    </a>
                    <p>showing the price of digital currencies</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>digital currency</h4>
                    </a>
                    <p>showing the price of digital currencies</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>digital currency</h4>
                    </a>
                    <p>showing the price of digital currencies</p>
                </div>
                <div className={styles.item}>
                    <a href="#">
                        <img src={currency} alt="currency" />
                        <h4>digital currency</h4>
                    </a>
                    <p>showing the price of digital currencies</p>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;
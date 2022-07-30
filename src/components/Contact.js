import React from 'react';

//Styles
import styles from '../sass/Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>contact with me</h1>
            </div>
            <form className={styles.formContainer}>
                <input type="text" id='name' /> 
                <label htmlFor="name">Full Name</label>
                <input type="text" id='number'/> 
                <label htmlFor="number">Phone Number</label>
                <input type="email" id='email' /> 
                <label htmlFor="email">Email Address</label>
                <input type="text" id='text' /> 
                <label htmlFor="text">Message</label>
                <button type='submit'>Send Message</button>
            </form>
            <div className={styles.contactWay}>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'

//Styles
import styles from '../sass/Contact.module.scss';

const Contact = () => {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_gffsyyn', 'template_yx8kexn', form.current, 'IJIsQxMxPBm90DDYo')
        .then((result) => {
            console.log(result.text);
        }, (error) =>{
            console.log(error.text);
        }
        )
    }

    return (
        <div className={styles.container}>
            <div>
                <h1>contact with me</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
                <input placeholder=' ' type="text" id='name' /> 
                <label htmlFor="name">Full Name</label>
                <input placeholder=' ' type="text" id='number'name='name'/> 
                <label htmlFor="number">Phone Number</label>
                <input placeholder=' ' type="email" id='email' name='email'/> 
                <label htmlFor="email">Email Address</label>
                <textarea placeholder='Message' name="text" id="text" cols="40" rows="10"></textarea>
                <button type='submit' value="Send">Send Message</button>
            </form>
            <div className={styles.contactWay}>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;
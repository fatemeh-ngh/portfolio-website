import React, {useContext, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form } from 'react-bootstrap';
//Styles
import styles from '../sass/Contact.module.scss';

//Hook
import { useTranslation} from "react-i18next";

//Context
import {Themecontext} from '../contexts/ThemeContext';


const Contact = () => {

    const form = useRef();
    const {t, i18n} = useTranslation();
    const [theme] = useContext(Themecontext);

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
        <Container fluid 
            dir={i18n.language === 'en' ? 'ltr' : 'rtl'} 
            className={`
                ${styles.container} 
                ${theme === "dark" ? styles.dark : styles.light} 
                ${i18n.language === 'en' ? styles.english : styles.farsi}
                mt-5 
            `}>
            <Row>
                <Col>
                    <Container>
                        <Form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
                            <h1 className=''>{t("Contact")}</h1>
                            <input placeholder={t("fullname")} type="text" id='name' /> 
                            <input placeholder={t("phonenumber")} type="text" id='number'name='name'/> 
                            <input placeholder={t("emailaddress")} type="email" id='email' name='email'/> 
                            <textarea placeholder={t("message")} name="text" id="text" cols="40" rows="10"></textarea>
                            <button type='submit' value="Send">{t("sendmessage")}</button>
                        </Form>
                    </Container>
                </Col>
                <Col>
                <Container className='pt-5'>
                    <Row className={`${styles.contactWayContainer} pt-lg-5 pb-5 `}>
                        <Col as={'a'} href="mailto:ftm.ngh.2001@gmail.com" target="-blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope-open" viewBox="0 -5 16 27">
                            <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
                            </svg>
                            <div>
                                <h5>{t("email")}:</h5>
                                <p>ftm.ngh.2001@gmail.com</p>
                            </div>
                        </Col>
                        <Col as={'a'} href="tel:09387491560" target="-blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telephone" viewBox="0 -5 16 27">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <div>
                                <h5>{t("call")}:</h5>
                                <p>09387491560</p>
                            </div>
                        </Col>
                        <Col as={'a'} href="https://t.me/Fatemeh_ngh_2001" target="-blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telegram" viewBox="0 -5 16 27">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                            </svg>
                            <div>
                                <h5>{t("telegram")}:</h5>
                                <p>@Fatemeh_ngh_2001</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
    );
};

export default Contact;
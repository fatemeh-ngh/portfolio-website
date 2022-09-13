import React,{useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';

//Image
import pic from '../../../assets/images/background.jpg'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

//Hook
import { useTranslation } from 'react-i18next';

//Styles
import styles from './About.module.scss'


const Aboute = () => {

    const{t, i18n} = useTranslation();
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

    useEffect(()=> {
        const handleWindowMouseMove = event => {
            setGlobalCoords({
              x: event.screenX,
              y: event.screenY,
            });
        }
        window.addEventListener("mousemove", handleWindowMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        }
    }, []);
    const x = globalCoords.x / 1000;
    const y = globalCoords.y / 1000;

    return (
        <Container id='about' className={`${styles.container} ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
            <Row className={styles.header}>
                <span>{t("BIOGRAPHY")}</span>
                <h3>{t("Aboute Me")}</h3>
            </Row>
            <Row>
                <Col xs={12} lg={6}>
                    <div className={styles.left} style={{transform: `translate(${x}rem, ${y}rem)`}}>
                    <div className={styles.border} ></div>
                    <img style={{transform: `translate(${x}rem, ${y}rem)`}} src={pic} alt="person" />
                    </div>
                </Col>
                <Col xs={12} lg={6} className={styles.right}>
                    <div className={styles.title}>
                        <h3>{t("i'm")}<span>
                                {i18n.language === 'en' ?
                                    <Typewriter 
                                    options={{strings: ['Web Developer', 'Front-End Developer'],
                                    autoStart: true,
                                    loop: true,}}/>          
                                : 
                                    <Typewriter 
                                    options={{strings: ['توسعه دهنده وب', 'فرانت اند دولوپر'],
                                    autoStart: true,
                                    loop: true,}}/>  
                                }
                            </span>
                        </h3>
                    </div>
                    <div className={styles.text}>
                        <p>
                        {t("himynameis")} <span>{t("name")}{t("lastname")}</span>.
                         {t("Iama...")}
                        </p>
                    </div>
                        <div className={styles.about}>
                        <ul>
                            <li><i class="bi bi-gift-fill"></i><span>{t("Birthday")}</span></li>
                            <li><i class="bi bi-calendar-week"></i><span>{t("Age")} : 21</span></li>
                            <li><i class="bi bi-geo-alt-fill"></i><span>{t("Location")}</span></li>
                            <li><i class="bi bi-envelope-fill"></i><a href="mailto:ftm.ngh.2001@gmail.com" target="-blank" style={{cursor: 'pointer'}}>{t("mail")} : ftm.ngh.2001@gmail.com</a></li>
                            <li><i class="bi bi-telephone-fill"></i><a href="tel:09387491560" target="-blank">{t("Phone")}: +98 0938 749 1560</a></li>
                            <li><i class="bi bi-mortarboard-fill"></i><span>{t("degree")}</span></li>
                        </ul>
                    </div>
                    <div className={styles.download}>
                        <a href="#" download>
                            <span>{t("downloadcv")}</span>
                        </a>
                    </div>
                </Col>
           </Row>
        </Container>
    );
};

export default Aboute;
import React from 'react';
import Typewriter from 'typewriter-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../assets/images/background.jpg'
import { Container, Row, Col } from 'react-bootstrap';
//Styles
import styles from '../sass/About.module.scss'


const Aboute = () => {
    return (
        <Container id='about'>
           <Row>
                <span>BIOGRAPHY</span>
                <h3>Aboute Me</h3>
           </Row>
            <Row>
                <Col className={styles.left}>
                    <div className={styles.border}>
                    </div>
                    <img style={{width: "350px", height: "400px"}} src={pic} alt="image" />
                </Col>
                <Col className={styles.right}>
                    <div className={styles.title}>
                        <h3>i'm Fatemeh Negahdari and
                            <span>
                            <Typewriter 
                                options={{strings: ['React', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript'],
                                autoStart: true,
                                loop: true,}}
                            />
                            </span>
                        </h3>
                    </div>
                    <div className={styles.text}>
                        <p>
                        Hi! My name is <span>Fatemeh Negahdari</span>.
                         I am a Web Developer, 
                         and I'm very passionate and dedicated to my work. 
                         With 20 years experience as a professional Web developer, 
                         I have acquired the skills and knowledge necessary to make 
                         your project a success.
                        </p>
                    </div>
                    <div className={styles.about}>
                        <ul>
                            <li><i class="bi bi-gift-fill"></i><span>Birthday: 09.12.2001</span></li>
                            <li><i class="bi bi-calendar-week"></i><span>Age:  21</span></li>
                            <li><i class="bi bi-geo-alt-fill"></i><span>Location: Neyriz, Fars, Iran</span></li>
                            <li><i class="bi bi-envelope-fill"></i><span>Mail: ftm.ngh.2001@gmail.com</span></li>
                            <li><i class="bi bi-telephone-fill"></i><span>Phone: +98 0938 749 1560</span></li>
                            <li><i class="bi bi-mortarboard-fill"></i><span>Degree: diploma</span></li>
                        </ul>
                    </div>
                    <div className={styles.aboutShortCot}>
                        <a href="#" download>
                            <span>Download CV</span>
                        </a>
                    </div>
                </Col>
           </Row>
        </Container>
    );
};

export default Aboute;
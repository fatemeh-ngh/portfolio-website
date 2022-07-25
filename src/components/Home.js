import React,{useContext} from 'react';

//Images
// import background from "../assets/images/background.jpg";
// import styled from 'styled-components';

//Context
import {Themecontext} from '../contexts/ThemeContext';

//Styles
import styles from '../sass/Home.module.scss';

//Hook
import { useTranslation} from "react-i18next";


const Home = () => {

        const [theme,] = useContext(Themecontext);
        const {t, i18n} = useTranslation();

        return (
        <div className={`
        ${styles.container}
        ${theme} 
        ${i18n.language === 'en' ? styles.english : styles.farsi}`}>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 
                از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                 و متون بلکه روزنامه و مجله در ستون و سطر
                آنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                 مورد نیاز، و کاربردهای متنوع با هدف بهبود
                 ابزارهای کاربردی می باشد، کتابهای زیادی در
                 شصت و سه درصد گذشته حال و آینده، شناخت فراوان 
                جامعه و متخصصان را می طلبد، تا با نرم افزارها
                 شناخت بیشتری را برای طراحان رایانه ای علی 
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی 
                ایجاد کرد، در این صورت می توان امید داشت که تمام
                 و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
                 به پایان رسد و زمان مورد نیاز شامل حروفچینی
                 دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                 دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p> 
            <br />          
            <br />          
            <br />          
            <br />         
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quo consequuntur iure
                similique vitae totam ducimus nemo quaerat.
                Hic explicabo blanditiis nisi perferendis
                quis natus! Doloremque odio ab nemo, incidunt asperiores cum
                 quod iure aliquid adipisci sequi debitis vel eius mollitia nobis tempora.
                Mollitia aut quos amet quasi eius tenetur ut.
            </p>
            <br />          
            <br />          
            <br />          
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quo consequuntur iure
                similique vitae totam ducimus nemo quaerat.
                Hic explicabo blanditiis nisi perferendis
                quis natus! Doloremque odio ab nemo, incidunt asperiores cum
                 quod iure aliquid adipisci sequi debitis vel eius mollitia nobis tempora.
                Mollitia aut quos amet quasi eius tenetur ut.
            </p>
            <br />          
            <br />          
            <br />          
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quo consequuntur iure
                similique vitae totam ducimus nemo quaerat.
                Hic explicabo blanditiis nisi perferendis
                quis natus! Doloremque odio ab nemo, incidunt asperiores cum
                 quod iure aliquid adipisci sequi debitis vel eius mollitia nobis tempora.
                Mollitia aut quos amet quasi eius tenetur ut.
            </p>
            <br />          
            <br />          
            <br />          
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quo consequuntur iure
                similique vitae totam ducimus nemo quaerat.
                Hic explicabo blanditiis nisi perferendis
                quis natus! Doloremque odio ab nemo, incidunt asperiores cum
                 quod iure aliquid adipisci sequi debitis vel eius mollitia nobis tempora.
                Mollitia aut quos amet quasi eius tenetur ut.
            </p>
            <br />          
            <br />          
            <br />          
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quo consequuntur iure
                similique vitae totam ducimus nemo quaerat.
                Hic explicabo blanditiis nisi perferendis
                quis natus! Doloremque odio ab nemo, incidunt asperiores cum
                 quod iure aliquid adipisci sequi debitis vel eius mollitia nobis tempora.
                Mollitia aut quos amet quasi eius tenetur ut.
            </p>
            <br />          
            <br />          
            <br />          
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quo consequuntur iure
                similique vitae totam ducimus nemo quaerat.
                Hic explicabo blanditiis nisi perferendis
                quis natus! Doloremque odio ab nemo, incidunt asperiores cum
                 quod iure aliquid adipisci sequi debitis vel eius mollitia nobis tempora.
                Mollitia aut quos amet quasi eius tenetur ut.
            </p>
        </div>
    );
};

export default Home;
import React, {useState} from 'react';
import styles from '../sass/Hamber.module.scss'
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'

//Hook
import { useTranslation} from "react-i18next";
import styled from 'styled-components';

// const Container = styled.div`
//     display: flex;
//     flex-direction: row-reverse;
//     // position: relative;
// `
// const Icon = styled.div`
//     // background-color: #000;
//     margin: auto 0;
//     width: 30px;
//     height: 20px;
//     display: none;
//     flex-direction: column;
//     justify-content: space-between;
//     margin-right: 50px;
//     cursor: pointer;
//     span{
//         width: 100%;
//         height: 4px;
//         background-color: #fff;
//     }
//     @media (max-width: 992px) {
//             display: flex;
//     }
// }
// `
const MenuContainer = styled.div`
        position: absolute;
        width: 80vw;
        height: 300px;
        margin: 70px 80px;
        background-color: #2552124f;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    a{
        text-decoration: none;
        color: $white;
        width: 100%;
        height: 60px;
        text-align: center;
        background-color: #A6A7AB;
    }
    a:hover{
        background-color: #909296;
    }
`
const HambergerMenu = () => {

    const {t} = useTranslation();
    const [open, setOpen] = useState('true')
    const MenuHandler= () => {
        setOpen(!open);
    }
    console.log(open);
    return (
        <Container>
            <Icon open={open} onClick={MenuHandler}>
                <span></span>
                <span></span>
                <span></span>
            </Icon>
            <MenuContainer>
                <Link to="/contact">{t("Contact")}</Link><span> </span>
                <Link to="/blog">{t("Blog")}</Link><span> </span>
                <Link to="/shop">{t("Shop")}</Link><span> </span>
                <Link to="/portfolio">{t("Portfolio")}</Link><span> </span>
                <Link to="/">{t("Home")}</Link><span></span>
            </MenuContainer>
        </Container>

    );
};

export default HambergerMenu;
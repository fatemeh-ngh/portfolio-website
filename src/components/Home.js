import React from 'react';
import styled from 'styled-components'
//Images
import background from "../assets/images/background.jpg";


const Home = () => {

    return (
        <div>
            <img src={background} alt="laptop" style={{width: "100%", height: "100vh"}}/>
        </div>
    );
};

export default Home;
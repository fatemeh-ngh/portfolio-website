import React from 'react';

//Component
import Aboute from './Aboute/Aboute';
import Landing from './Landing/Landing';
import Slider from './Slider/Slider';


const Home = () => {
        return (
        <>
            <Landing/>
            <Aboute/>
            <Slider/>
        </>
    );
};

export default Home;
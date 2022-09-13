import React from 'react';
import { createContext, useState, useEffect } from "react";

export const ScrollContext = createContext();

const Scroll = ({children}) => {

    const [scroll, setScroll] = useState(false);

    const changBackground = () => {
        if(window.scrollY >= 66 ) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changBackground();
        window.addEventListener("scroll", changBackground)
    })

    return (
        <ScrollContext.Provider value={[scroll]}>
            {children}
        </ScrollContext.Provider>
    );
};
export default Scroll;
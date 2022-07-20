import React, {useState, createContext} from 'react';

export const Themecontext = createContext();

const ThemeContext = ({children}) => {

    const [theme, setTheme] = useState('light');

    return (
        <Themecontext.Provider value={[theme,setTheme]}>
            {children}
        </Themecontext.Provider>
    );
};

export default ThemeContext;
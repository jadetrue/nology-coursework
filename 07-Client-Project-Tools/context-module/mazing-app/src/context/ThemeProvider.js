import React, {createContext, useState} from "react";
import {UserProvider} from "./UserProvider";

export const ThemeContext = createContext({});

const ThemeProvider = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const theme = {
        isDarkTheme: isDarkTheme,
        toggleTheme: toggleTheme,
    };

    return (
        <ThemeContext.Provider value={theme}>
            <UserProvider />
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

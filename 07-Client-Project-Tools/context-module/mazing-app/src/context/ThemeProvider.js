import React, {createContext, useState} from "react";
import {UserProvider} from "./UserProvider";

export const ThemeProvider = createContext({});

const ThemeProviderComponent = () => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme);
    };

    const themeData = {
        isDarkTheme: theme,
        toggleTheme: toggleTheme,
    };

    return (
        <div>
            <ThemeProviderComponent value={themeData}>
                <UserProvider />
            </ThemeProviderComponent>
        </div>
    );
};

export default ThemeProviderComponent;

import React, {useContext} from "react";
import NavMenu from "./NavMenu";
import {ThemeContext} from "../context/ThemeProvider";

const NavBar = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <nav className={themeContext.isDarkTheme ? "dark" : "light"}>
            <h1>MazingApp</h1>
            <button onClick={themeContext.toggleTheme}>Change Theme</button>
            <NavMenu />
        </nav>
    );
};

export default NavBar;

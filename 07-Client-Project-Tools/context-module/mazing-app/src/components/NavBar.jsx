import React, {useContext} from "react";
import NavMenu from "./NavMenu";
import {ThemeProvider} from "../context/ThemeProvider";

const NavBar = () => {
    const theme = useContext(ThemeProvider);

    return (
        <div className={theme.isDarkTheme ? "dark" : "light"}>
            <h1>MazingApp</h1>
            <NavMenu />
        </div>
    );
};

export default NavBar;

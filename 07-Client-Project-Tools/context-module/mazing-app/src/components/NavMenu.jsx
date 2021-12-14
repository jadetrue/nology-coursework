import React, {useContext} from "react";
import {UserContext} from "../context/UserProvider";
import {ThemeProvider} from "../context/ThemeProvider";

const NavMenu = () => {
    const divStyle = {
        width: "100%",
        marginTop: "30px",
        marginBottom: "30px",
        padding: "20px",
        color: "red",
        background: "orange",
    };

    const inputStyle = {
        padding: "5px",
        margin: "10px",
    };
    const data = useContext(UserContext);

    const theme = useContext(ThemeProvider);

    return (
        <>
            <div style={divStyle}>
                <select style={inputStyle} name="data" id="dataId">
                    <option value={data.name}>{data.name}</option>
                </select>
                <select style={inputStyle} name="theme" id="themeId">
                    <option value={data.name}>Light</option>
                    <option value={data.name}>Dark</option>
                </select>
                <button onClick={theme.toggleTheme}>Change Theme</button>
            </div>
        </>
    );
};

export default NavMenu;

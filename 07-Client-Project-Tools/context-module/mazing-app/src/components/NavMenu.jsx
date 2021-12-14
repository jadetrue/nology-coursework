import React, {useContext} from "react";
import {UserContext} from "../context/UserProvider";

const NavMenu = () => {
    const divStyle = {
        width: "100%",
        padding: "20px",
    };

    const inputStyle = {
        padding: "5px",
        margin: "10px",
        alignItems: "center",
    };
    const data = useContext(UserContext);

    return (
        <>
            <div style={divStyle}>
                <select style={inputStyle} name="data" id="dataId">
                    <option value={data.name}>{data.name}</option>
                </select>
            </div>
        </>
    );
};

export default NavMenu;

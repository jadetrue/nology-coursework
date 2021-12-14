import React, {createContext, useState} from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";

export const UserContext = createContext({});
export const ThemeContext = createContext({});

export const UserProvider = () => {
    const userData = {
        name: "Jade True",
    };
    const [user, setUser] = useState(userData);

    return (
        <UserContext.Provider value={user}>
            <NavBar />
            <Home />
        </UserContext.Provider>
    );
};

export default UserProvider;

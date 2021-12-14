import React, {createContext, useState} from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Login from "../components/Login";

export const UserContext = createContext({});
export const ThemeContext = createContext({});

export const UserProvider = () => {
    const userData = {
        name: "Jade True",
    };
    const [user, setUser] = useState(userData);

    const data = {user: user, setUser: setUser};

    return (
        <UserContext.Provider value={data}>
            <NavBar />
            <Home />
            <Login />
        </UserContext.Provider>
    );
};

export default UserProvider;

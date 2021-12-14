import React, {useContext} from "react";
import {UserContext} from "../context/UserProvider";
import {ThemeContext} from "../context/ThemeProvider";

const Home = () => {
    const data = useContext(UserContext);

    return (
        <main>
            <h1>Welcome home, {data.name}</h1>
        </main>
    );
};

export default Home;

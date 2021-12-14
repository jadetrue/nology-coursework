import React, {useContext} from "react";
import {UserContext} from "../context/UserProvider";

const Home = () => {
    const data = useContext(UserContext);

    return <div>Welcome home, {data.name}</div>;
};

export default Home;

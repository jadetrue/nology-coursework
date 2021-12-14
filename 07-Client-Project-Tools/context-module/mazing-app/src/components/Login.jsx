import React, {useContext} from "react";
import {UserContext} from "../context/UserProvider";
import {app} from "../firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
    const userContext = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault(); // Doesn't refresh the page

        const email = e.target[0].value;
        const password = e.target[1].value;

        signInWithEmailAndPassword(getAuth(app), email, password)
            .then((response) => {
                userContext.setUser(response.user.email);
                alert("Welcome back to our app");
            })
            .catch((e) => {
                alert("Sorry something went wrong");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Email</label>
                <input type="text" />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input type="text" />
            </fieldset>
            <button type="submit">Sign in</button>
        </form>
    );
};

export default Login;

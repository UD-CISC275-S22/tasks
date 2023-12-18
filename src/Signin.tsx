/*Documentation(used chatGPT to help write):
The SignIn component is a React functional component responsible for rendering and managing a user login form. 
It leverages Firebase authentication by importing the signInWithEmailAndPassword method. 
The component maintains local state variables, email and password, to store user input for the email and password fields. 
The signIn function is triggered upon form submission, preventing the default form behavior. 
It utilizes Firebase's authentication method to sign in the user with the provided email and password, logging the user credential upon successful authentication and handling any errors that may occur. 
The component renders a form with input fields for email and password, allowing users to log in by submitting their credentials through the form.
*/

import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log In to your Account</h1>
                <input
                    type="email"
                    placeholder="Enter your Udel email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default SignIn;

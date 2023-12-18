/*Documentation(used chatGPT to help write):
The SignUp component is a React functional component responsible for rendering and managing a user registration form. 
It imports Firebase authentication functionality to enable the creation of user accounts. 
The component utilizes local state variables, email and password, to store user input for email and password fields. 
The signUp function is invoked upon form submission, preventing the default form behavior. 
It uses Firebase's createUserWithEmailAndPassword method to register a new user with the provided email and password, logging the user credential upon successful registration and handling any errors that may occur. 
The component renders a form with input fields for email and password, allowing users to sign up by submitting their information through the form.
 */

import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;

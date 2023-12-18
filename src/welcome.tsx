/*Documentation(used chatGPT to help write):
The WelcomeMessage component is a React functional component designed to manage the welcome message and user authentication flow within a University of Delaware Course Scheduler application. 
It imports and renders child components such as SignIn, SignUp, and AuthDetails to handle user authentication and display relevant content based on the user's login status. 
The component maintains local state using the useState hook to track whether a user is logged in. 
It provides callback functions, handleLogin and handleLogout, to update the login state accordingly. 
When a user is logged in, it displays a logout button; otherwise, it presents a welcome message along with sign-in and sign-up options. 
The component also includes an image of the UD Fall Scene to enhance the visual appeal. 
Developers can integrate this component into their application to create a welcoming and user-friendly authentication interface for the University of Delaware Course Scheduler.
*/

/* eslint-disable no-extra-parens */
// WelcomeMessage.tsx
import React, { useState } from "react";
import "./welcome.css";
import Image3 from "./Images/UDFallScene.png";
import SignIn from "./Signin";
import SignUp from "./SignUp";
import AuthDetails from "./AuthDetails";

interface WelcomeMessageProps {
    showHomePage: () => void;
    onLogout: () => void;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ showHomePage }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        // showHomePage();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // onLogout();
    };

    return (
        <div className="App">
            <AuthDetails
                onLogin={handleLogin}
                onLogout={handleLogout}
                flipPage={showHomePage}
            />

            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                // showHomePage()
                <div className="WelcomeMessage" style={{ marginTop: "1.5%" }}>
                    <h5>
                        Welcome to the University of Delaware Course Scheduler!
                    </h5>
                    <h6>
                        Here you can view available courses, create mock
                        semester plans, and submit your desired course plans.
                    </h6>
                    <SignIn />
                    <SignUp />
                </div>
            )}

            <img id="picture" src={Image3} alt="UD Fall Scene" />
        </div>
    );
};

export default WelcomeMessage;

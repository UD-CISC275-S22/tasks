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

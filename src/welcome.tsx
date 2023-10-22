import React, { useState } from "react";

const WelcomeMessage: React.FC = () => {
    const [name, setName] = useState("");
    const [showWelcome, setShowWelcome] = useState(true);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleShowWelcome = () => {
        setShowWelcome(false);
    };

    return (
        <div className="App">
            {showWelcome ? (
                <div className="WelcomeMessage">
                    <p>Please enter your name:</p>
                    <input type="text" onChange={handleNameChange} />
                    <button onClick={handleShowWelcome}>OK</button>
                </div>
            ) : (
                <div className="WelcomeUser">Welcome, {name}!</div>
            )}
        </div>
    );
};

export default WelcomeMessage;

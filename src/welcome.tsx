/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import "./welcome.css";

interface WelcomeMessage {
    showHomePage: () => void;
    getName: (name: string) => void;
}

const WelcomeMessage: React.FC<WelcomeMessage> = ({
    showHomePage,
    getName
}) => {
    const [name, setName] = useState("");
    const [showWelcome, setShowWelcome] = useState(true);
    const [inactiveTimeout, setInactiveTimeout] =
        useState<NodeJS.Timeout | null>(null);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleShowWelcome = () => {
        if (name.trim() !== "") {
            setShowWelcome(false);
            // const newInactiveTimeout = setTimeout(() => {
            //     setShowWelcome(true);
            //     setName("");
            // }, 5 * 60 * 1000);
        } else {
            alert("Please enter a valid name.");
        }
    };

    useEffect(() => {
        const resetInactiveTimeout = () => {
            if (inactiveTimeout) {
                clearTimeout(inactiveTimeout);
                const newInactiveTimeout = setTimeout(() => {
                    setShowWelcome(true);
                    setName("");
                }, 5 * 60 * 1000);
                setInactiveTimeout(newInactiveTimeout);
            }
        };

        document.addEventListener("mousemove", resetInactiveTimeout);
        document.addEventListener("keydown", resetInactiveTimeout);

        return () => {
            document.addEventListener("mousemove", resetInactiveTimeout);
            document.addEventListener("keydown", resetInactiveTimeout);
        };
    }, [inactiveTimeout]);

    return (
        <div className="App">
            {showWelcome ? (
                <div className="WelcomeMessage" style={{ marginTop: "2.5%" }}>
                    <h5>
                        Welcome to the University of Delaware Course Scheduler!
                    </h5>
                    <h6>
                        Here you can view available courses, create mock
                        semester plans, and submit your desired course plans.
                    </h6>
                    <p>Please enter your name:</p>
                    <input type="text" onChange={handleNameChange} />
                    <button onClick={handleShowWelcome}>OK</button>
                </div>
            ) : (
                <div>
                    {showHomePage()}
                    {getName(name)}
                </div>
            )}
            <div>
                <img
                    id="picture"
                    src="https://i.pinimg.com/originals/04/07/0b/04070b3cf387c55c7eadbf84eceedcfe.jpg"
                ></img>
            </div>
        </div>
    );
};

export default WelcomeMessage;

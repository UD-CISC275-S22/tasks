import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // State to track the number of attempts
    const [attempts, setAttempts] = useState<number>(4);

    // State to track whether the quiz is in progress
    const [isInProgress, setIsInProgress] = useState<boolean>(false);

    // Function to start the quiz
    const startQuiz = () => {
        setIsInProgress(true);
        setAttempts((currentAttempts) => currentAttempts - 1);
    };

    // Function to stop the quiz
    const stopQuiz = () => {
        setIsInProgress(false);
    };

    // Function to give a mulligan (extra attempt)
    const giveMulligan = () => {
        setAttempts((currentAttempts) => currentAttempts + 1);
    };

    return (
        <div>
            {/* Display the number of attempts */}
            <div>Attempts: {attempts}</div>

            {/* Button to start the quiz */}
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0} // Disable if quiz is in progress or no attempts left
            >
                Start Quiz
            </Button>

            {/* Button to stop the quiz */}
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                {" "}
                {/* Disable if quiz is not in progress */}
                Stop Quiz
            </Button>

            {/* Button to give a mulligan */}
            <Button onClick={giveMulligan} disabled={isInProgress}>
                {" "}
                {/* Disable if quiz is in progress */}
                Mulligan
            </Button>
        </div>
    );
}

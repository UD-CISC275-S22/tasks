import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // State to manage the number of attempts
    const [attempts, setAttempts] = useState(4);
    // State to manage whether the quiz is in progress
    const [isInProgress, setIsInProgress] = useState(false);

    // Function to handle the start of the quiz
    const startQuiz = () => {
        setIsInProgress(true);
        setAttempts(attempts - 1);
    };

    // Function to handle the stop of the quiz
    const stopQuiz = () => {
        setIsInProgress(false);
    };

    // Function to handle adding an extra attempt (Mulligan)
    const addAttempt = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            {/* Start Quiz button */}
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            {/* Stop Quiz button */}
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>

            {/* Mulligan button */}
            <Button onClick={addAttempt} disabled={isInProgress}>
                Mulligan
            </Button>

            {/* Displaying the current number of attempts */}
            <div>Attempts left: {attempts}</div>
        </div>
    );
}

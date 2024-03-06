import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState(4);
    const [quizInProgress, setQuizInProgress] = useState(false);

    const startQuiz = () => {
        setQuizInProgress(true);
        setNumAttempts((prevAttempts) => prevAttempts - 1);
    };

    const stopQuiz = () => {
        setQuizInProgress(false);
    };

    const takeMulligan = () => {
        setNumAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            {/* Start Quiz button */}
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            {/* Stop Quiz button */}
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            {/* Mulligan button */}
            <Button onClick={takeMulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
            {/* Display number of attempts remaining */}
            <p>Attempts remaining: {numAttempts}</p>
        </div>
    );
}

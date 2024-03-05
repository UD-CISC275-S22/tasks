import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts((prevAttempts) => prevAttempts - 1);
        }
    };

    const stopQuiz = () => {
        setQuizInProgress(false);
    };

    const giveMulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </button>
            <button onClick={giveMulligan} disabled={quizInProgress}>
                Mulligan
            </button>
            <p>Attempts remaining: {attempts}</p>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptNumber, setAttemptNumber] = useState(5); // Initial attempt number is set to a value within the required range
    const [quizStarted, setQuizStarted] = useState(false); // Track whether the quiz has started

    const startQuiz = () => {
        if (attemptNumber > 0) {
            setQuizStarted(true);
            setAttemptNumber(attemptNumber - 1);
        }
    };

    const stopQuiz = () => {
        setQuizStarted(false);
    };

    const useMulligan = () => {
        setAttemptNumber(attemptNumber + 1);
    };

    return (
        <div>
            <div>Attempts: {attemptNumber}</div>
            <Button
                onClick={startQuiz}
                disabled={quizStarted || attemptNumber <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizStarted}>
                Stop Quiz
            </Button>
            <Button onClick={useMulligan} disabled={quizStarted}>
                Mulligan
            </Button>
        </div>
    );
}

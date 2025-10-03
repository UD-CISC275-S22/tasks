import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const maxAttempts = 10;
    const [attempts, setAttempts] = useState<number>(3); // initial attempts
    const [quizStarted, setQuizStarted] = useState<boolean>(false);

    const handleStart = () => {
        if (attempts > 0) {
            setAttempts((prev) => prev - 1);
            setQuizStarted(true);
        }
    };

    const handleStop = () => {
        setQuizStarted(false);
    };

    const handleMulligan = () => {
        setAttempts((prev) => Math.min(prev + 1, maxAttempts));
    };

    return (
        <div>
            <p>Number of attempts: {attempts}</p>
            <Button
                onClick={handleStart}
                disabled={quizStarted || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={handleStop} disabled={!quizStarted}>
                Stop Quiz
            </Button>
            <Button onClick={handleMulligan} disabled={quizStarted}>
                Mulligan
            </Button>
        </div>
    );
}
    
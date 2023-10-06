import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [isInProgress, setIsInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        setIsInProgress(true);
        setAttempts((prev) => prev - 1);
    };

    const stopQuiz = () => {
        setIsInProgress(false);
    };

    const addAttempt = () => {
        setAttempts((prev) => prev + 1);
    };

    return (
        <div>
            <p>Attempts left: {attempts}</p>
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={isInProgress}>
                Mulligan
            </Button>
        </div>
    );
}

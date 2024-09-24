import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4); // Initial attempts
    const [isInProgress, setIsInProgress] = useState<boolean>(false); // Quiz not in progress initially

    const startQuiz = () => {
        if (attempts > 0) {
            setIsInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    const stopQuiz = () => {
        setIsInProgress(false);
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <h3>Attempts left: {attempts}</h3>
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={isInProgress}>
                Mulligan
            </Button>
        </div>
    );
}

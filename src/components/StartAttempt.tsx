import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isInProgress, setIsInProgress] = useState(false);

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
            <Button onClick={startQuiz} disabled={isInProgress || attempts === 0}>Start Quiz</Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>Stop Quiz</Button>
            <Button onClick={mulligan} disabled={isInProgress}>Mulligan</Button>
            <div>Attempts left: {attempts}</div>
        </div>
    );
}

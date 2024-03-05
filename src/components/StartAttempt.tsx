import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    const startQuiz = (): void => {
        setProgress(true);
        setAttempts(attempts - 1);
    };
    const stopQuiz = (): void => {
        setProgress(false);
    };
    const mulligan = (): void => {
        setProgress(false);
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <Button onClick={startQuiz} disabled={progress || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
            <br></br>
            Progress: {progress ? "Yes" : "No "} <br></br>Attempts: {attempts}
        </div>
    );
}

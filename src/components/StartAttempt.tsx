import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [InProgress, setInProgress] = useState<boolean>(false);
    const startQuiz = () => {
        setInProgress(true);
        setAttempt((prevAttempts) => prevAttempts - 1);
    };
    const stopQuiz = () => {
        setInProgress(false);
    };
    const mulligan = () => {
        setAttempt((prevAttempt) => prevAttempt + 1);
    };
    return (
        <div>
            Current Attempt : <span>{attempt}</span>
            <Button onClick={mulligan} disabled={InProgress}>
                Mulligan
            </Button>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={attempt === 0 || InProgress}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!InProgress}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}

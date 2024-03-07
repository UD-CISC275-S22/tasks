import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [quizInProgess, setQuizInProgress] = useState<boolean>(false);

    const startQuizHandler = (): void => {
        setQuizInProgress(true);
        setNumAttempts(
            (prevNumAttempts: number): number => prevNumAttempts - 1
        );
    };

    const stopQuizHandler = (): void => {
        setQuizInProgress(false);
    };

    const mulliganHandler = (): void => {
        setNumAttempts(
            (prevNumAttempts: number): number => prevNumAttempts + 1
        );
    };

    return (
        <div>
            <Button
                onClick={startQuizHandler}
                disabled={quizInProgess || !numAttempts}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuizHandler} disabled={!quizInProgess}>
                Stop Quiz
            </Button>
            <Button onClick={mulliganHandler} disabled={quizInProgess}>
                Mulligan
            </Button>
            <p>Attempt Number: {numAttempts}</p>
        </div>
    );
}

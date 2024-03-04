import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    const startQuiz = (): void => {
        setNumAttempts(numAttempts - 1);
        setProgress(true);
    };

    const stopQuiz = (): void => {
        setProgress(false);
    };

    const mulligan = (): void => {
        setNumAttempts(numAttempts + 1);
    };

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            {<div>{numAttempts}</div>}
        </div>
    );
}

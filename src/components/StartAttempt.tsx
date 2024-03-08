import React, { useState } from "react";
import { Button } from "react-bootstrap";
//hey
export function StartAttempt(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempts(numAttempts - 1);
        setInProgress(true);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttempts(numAttempts + 1);
    }

    return (
        <div>
            <span>Number of Attempts = {numAttempts}</span>
            <br></br>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
        </div>
    );
}

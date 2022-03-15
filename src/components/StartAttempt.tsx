import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function startQuiz(): void {
        if (numAttempts > 0) {
            setInProgress(true);
            setNumAttempts(numAttempts - 1);
        }
    }
    function Mulligan(): void {
        setNumAttempts(numAttempts + 1);
    }
    function stopQuiz(): void {
        setInProgress(false);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={numAttempts === 0 || inProgress}
            >
                Start Quiz
            </Button>
            <Button onClick={Mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            {numAttempts}
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
        </div>
    );
}

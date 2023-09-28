import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttemptsRemaining(attemptsRemaining - 1);
        setInProgress(true);
    }

    return (
        <div>
            <div>
                <span>{attemptsRemaining}</span>
            </div>
            <button
                onClick={startQuiz}
                disabled={inProgress === true || attemptsRemaining <= 0}
            >
                Start Quiz
            </button>
            <button
                onClick={() => setAttemptsRemaining(attemptsRemaining + 1)}
                disabled={inProgress === true}
            >
                Mulligan
            </button>
            <button
                onClick={() => setInProgress(!inProgress)}
                disabled={inProgress === false}
            >
                Stop Quiz
            </button>
        </div>
    );
}

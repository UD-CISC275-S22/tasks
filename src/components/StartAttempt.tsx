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
            <Button
                onClick={startQuiz}
                disabled={inProgress === true || attemptsRemaining <= 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setAttemptsRemaining(attemptsRemaining + 1)}
                disabled={inProgress === true}
            >
                Mulligan
            </Button>
            <Button
                onClick={() => setInProgress(!inProgress)}
                disabled={inProgress === false}
            >
                Stop Quiz
            </Button>
        </div>
    );
}

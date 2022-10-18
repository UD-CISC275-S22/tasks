import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [status, setStatus] = useState<boolean>(false);

    function quizInStatus(): void {
        setStatus(true);
        setAttempt(attempt - 1);
    }

    return (
        <div>
            <Button onClick={quizInStatus} disabled={status || attempt <= 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setStatus(false)} disabled={!status}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAttempt(attempt + 1)} disabled={status}>
                Mulligan
            </Button>
            <br></br>
            Current Attempt: <span>{attempt}</span>
        </div>
    );
}

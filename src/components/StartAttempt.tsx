import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, startingAttempts] = useState(4);
    const [inProgress, startingProgress] = useState(false);

    const start = () => {
        startingProgress(true);
        startingAttempts(attempts - 1);
    };

    const stop = () => {
        startingProgress(false);
    };

    const mulligan = () => {
        startingAttempts(attempts + 1);
    };

    return (
        <div>
            <Button onClick={start} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>{" "}
            <Button onClick={stop} disabled={!inProgress}>
                Stop Quiz
            </Button>{" "}
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <br />
            <br />
            <div>Attempts left: {attempts}</div>
        </div>
    );
}

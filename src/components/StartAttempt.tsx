import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function start(): void {
        setAttempts(attempts - 1);
        setInProgress(true);
    }
    function mulligan(): void {
        attempts === 0 ? setInProgress(false) : setInProgress;
        setAttempts(attempts + 1);
    }

    return (
        <span>
            <div>Attempts: {attempts}</div>
            <Button onClick={start} disabled={inProgress}>
                Start Quiz
            </Button>
            <Button
                onClick={() => setInProgress(false)}
                disabled={!inProgress || attempts === 0}
            >
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress && attempts > 0}>
                Mulligan
            </Button>
        </span>
    );
}

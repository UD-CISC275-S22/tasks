import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function start(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    function stop(): void {
        setInProgress(false);
    }

    function addOne(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <p>
                Attempts Left: {attempts}{" "}
                {inProgress && <span>in progress</span>}
            </p>
            <Button disabled={inProgress || attempts === 0} onClick={start}>
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={stop}>
                Stop Quiz
            </Button>
            <Button disabled={inProgress} onClick={addOne}>
                Mulligan
            </Button>
        </div>
    );
}

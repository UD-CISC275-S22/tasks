import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [running, setRunning] = useState<boolean>(false);

    return (
        <>
            <Button
                disabled={running || numAttempts === 0}
                onClick={() => {
                    setRunning(true);
                    setNumAttempts(numAttempts - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button disabled={!running} onClick={() => setRunning(false)}>
                Stop Quiz
            </Button>
            <Button
                disabled={running}
                onClick={() => setNumAttempts(numAttempts + 1)}
            >
                Mulligan
            </Button>
            <div>{numAttempts}</div>
        </>
    );
}

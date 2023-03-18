import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [AttemptsLeft, setNumAttempts] = useState<number>(4);
    const [running, setRunning] = useState<boolean>(false);

    return (
        <>
            <Button
                disabled={running || AttemptsLeft === 0}
                onClick={() => {
                    setRunning(true);
                    setNumAttempts(AttemptsLeft - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button disabled={!running} onClick={() => setRunning(false)}>
                Stop Quiz
            </Button>
            <Button
                disabled={running}
                onClick={() => setNumAttempts(AttemptsLeft + 1)}
            >
                Mulligan
            </Button>
            <div>{AttemptsLeft}</div>
        </>
    );
}

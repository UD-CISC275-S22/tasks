import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [qAttempts, setAttempts] = useState<number>(4);
    const [qProgress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => [setProgress(true), setAttempts(qAttempts - 1)]}
                disabled={qProgress || qAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!qProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(qAttempts + 1)}
                disabled={qProgress}
            >
                Mulligan
            </Button>
            <span>{qAttempts}</span>
        </div>
    );
}

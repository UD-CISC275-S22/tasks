import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startFunct(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }

    function stopFunct(): void {
        setProgress(false);
    }

    return (
        <div>
            <Button onClick={startFunct} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopFunct} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={progress}
            >
                Mulligan
            </Button>

            <div>Number of Attempts: {attempts}</div>
        </div>
    );
}

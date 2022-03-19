import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, countAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startProgress(): void {
        setProgress(!progress);
        countAttempts(attempts - 1);
    }
    function stopProgress(): void {
        setProgress(!progress);
    }
    function mulligan(): void {
        countAttempts(attempts + 1);
    }

    return (
        <div>
            <div>
                <span>Attempts:{attempts}</span>
            </div>
            <Button
                onClick={() => startProgress()}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            :::
            <Button onClick={() => stopProgress()} disabled={!progress}>
                Stop Quiz
            </Button>
            :::
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}

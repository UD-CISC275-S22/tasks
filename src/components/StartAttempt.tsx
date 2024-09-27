import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, countAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function switcher(): void {
        setProgress(!progress);
        countAttempts(attempts - 1);
    }
    function stopProgress(): void {
        setProgress(!progress);
    }
    function increment(): void {
        countAttempts(attempts + 1);
    }
    return (
        <div>
            Start Attempt
            <div>
                <span>Attempts:{attempts}</span>
            </div>
            <Button
                onClick={() => switcher()}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => stopProgress()} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={increment} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}

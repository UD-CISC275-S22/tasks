import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    const started = () => {
        if (attempts > 0) {
            setProgress(true);
            setAttempts(attempts - 1);
        }
    };
    const stopped = () => {
        setProgress(false);
    };
    const mulligan = () => {
        setAttempts(attempts + 1);
    };
    return (
        <div>
            <div>{attempts}</div>
            <Button onClick={started} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopped} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}

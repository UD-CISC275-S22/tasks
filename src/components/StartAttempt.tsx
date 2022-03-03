import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <p>{attempts}</p>
            <Button
                onClick={() => {
                    setAttempts((prevAttempts) => prevAttempts - 1);
                    setProgress(true);
                }}
                disabled={progress || attempts <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts((prevAttempts) => prevAttempts + 1)}
                disabled={progress}
            >
                Mulligan
            </Button>
        </div>
    );
}

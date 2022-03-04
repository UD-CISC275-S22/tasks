import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function addAttempt(): void {
        setAttempts(attempts + 1);
    }
    function changeProgress(): void {
        if (progress) {
            setProgress(false);
        } else {
            setProgress(true);
            setAttempts(attempts - 1);
        }
    }
    return (
        <div>
            <div>
                <Button
                    onClick={changeProgress}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={changeProgress} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={addAttempt} disabled={progress}>
                    Mulligan
                </Button>
            </div>
            <div>Attempts: {attempts}</div>
        </div>
    );
}

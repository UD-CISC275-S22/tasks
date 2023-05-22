import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function inProgress(): void {
        setProgress(!progress);
        setAttempts(attempts - 1);
    }
    function endProgress(): void {
        setProgress(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button
                onClick={inProgress}
                disabled={attempts === 0 || progress === true}
            >
                Start Quiz
            </Button>
            <Button onClick={endProgress} disabled={progress === false}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress === true}>
                Mulligan
            </Button>
            <div>{attempts}</div>
        </div>
    );
}

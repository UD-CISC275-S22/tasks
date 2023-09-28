import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    // function minusAttempts(): void {
    //     setAttempts(attempts - 1);
    // }
    // function addAttempts(): void {
    //     setAttempts(attempts + 1);
    // }
    // function changeProgress(): void {
    //     setProgress(!inProgress);
    // }
    // function update(): void {
    //     minusAttempts();
    //     changeProgress();
    // }
    return (
        <>
            <p>{attempts} attempts</p>
            <Button
                onClick={() => {
                    setProgress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </>
    );
}

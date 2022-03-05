import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setState] = useState<boolean>(false);
    const [attemptsLeft, setAttempts] = useState<number>(4);

    function changeState(): void {
        setState(inProgress === false ? true : false);
    }

    function changeAttempts(action: boolean): void {
        if (action) {
            setAttempts(attemptsLeft + 1);
        } else {
            setAttempts(attemptsLeft - 1);
        }
    }

    return (
        <div>
            <h3>Start Attempt</h3>
            <p>Quiz Attempts: {attemptsLeft}</p>
            <Button
                onClick={() => {
                    changeAttempts(false);
                    changeState();
                }}
                disabled={inProgress || attemptsLeft === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    changeState();
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    changeAttempts(true);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}

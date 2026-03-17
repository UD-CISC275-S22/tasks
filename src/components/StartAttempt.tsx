import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

export function extractDigits(element: HTMLElement): number | null {
    const text = element.textContent;
    if (text === null) {
        return null;
    }
    const match = text.match(/\d+/);
    return match ? Number(match[0]) : null;
}

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button
                onClick={() => {
                    startQuiz();
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    stopQuiz();
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    mulligan();
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}

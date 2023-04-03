import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [inProgress, changeProgress] = useState<boolean>(false);

    function flipProgress(): void {
        changeProgress(!inProgress);
    }

    function startQuiz(): void {
        changeAttempts(attempts - 1);
        flipProgress();
    }

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts == 0}>
                Start Quiz
            </Button>
            <Button onClick={flipProgress} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => changeAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <span>{attempts}</span>
        </div>
    );
}

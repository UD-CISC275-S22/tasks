import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [progress, inProgress] = useState<boolean>(false);

    function quizStatus(progress: boolean): void {
        inProgress(progress);
        manageAttempts(-1);
    }
    function manageAttempts(num: number): void {
        changeAttempts(attempts + num);
    }
    return (
        <div>
            <Button
                onClick={() => quizStatus(true)}
                disabled={progress || !attempts}
            >
                Start Quiz
            </Button>

            <Button onClick={() => inProgress(false)} disabled={!progress}>
                Stop Quiz{" "}
            </Button>

            <Button onClick={() => manageAttempts(1)} disabled={progress}>
                Mulligan{" "}
            </Button>

            {<div>Attempts {attempts}</div>}
        </div>
    );
}

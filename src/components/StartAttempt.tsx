import React from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.ReactElement {
    const [attempts, setAttempts] = React.useState<number>(4);
    const [inProgress, setInProgress] = React.useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInProgress(false);
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
        </div>
    );
}

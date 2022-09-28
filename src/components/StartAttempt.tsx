import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    const beginQuiz = () => {
        setInProgress(true);
        setAttempts(attempts - 1);
    };

    return (
        <div>
            <p>{attempts}</p>
            <Button disabled={inProgress || !attempts} onClick={beginQuiz}>
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={() => setInProgress(false)}>
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => setAttempts(attempts + 1)}
            >
                Mulligan
            </Button>
        </div>
    );
}

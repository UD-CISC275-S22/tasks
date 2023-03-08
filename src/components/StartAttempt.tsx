import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, changeNumAttempts] = useState<number>(4);
    const [inProgress, changeInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        changeNumAttempts(numAttempts - 1);
        changeInProgress(true);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => changeInProgress(false)}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => changeNumAttempts(numAttempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            {numAttempts}
        </div>
    );
}

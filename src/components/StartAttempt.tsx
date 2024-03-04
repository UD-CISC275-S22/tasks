import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isInProgress, setIsInProgress] = useState(false);

    return (
        <div>
            <Button
                onClick={() => {
                    if (attempts > 0 && !isInProgress) {
                        setAttempts(attempts - 1);
                        setIsInProgress(true);
                    }
                }}
                disabled={attempts === 0 || isInProgress}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    if (isInProgress) {
                        setIsInProgress(false);
                    }
                }}
                disabled={!isInProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    if (!isInProgress) {
                        setAttempts(attempts + 1);
                    }
                }}
                disabled={isInProgress}
            >
                Mulligan
            </Button>
            <div>Attempts left: {attempts}</div>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function startAttempt() {
        if (numAttempts > 0) {
            setNumAttempts(numAttempts - 1);
            setInProgress(true);
        }
    }
    function stopAttempt() {
        setInProgress(false);
    }
    function mulligan() {
        setNumAttempts(numAttempts + 1);
    }

    return (
        <div>
            <Button
                onClick={startAttempt}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>

            <Button onClick={stopAttempt} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <div>Attempts: {numAttempts}</div>
        </div>
    );
}

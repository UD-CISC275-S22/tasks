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
        if (!inProgress) {
            setNumAttempts(numAttempts + 1);
        }
    }

    return (
        <div>
            {numAttempts !== 0 && !inProgress && (
                <button
                    onClick={startAttempt}
                    disabled={inProgress || numAttempts <= 0}
                >
                    Start Quiz
                </button>
            )}
            <button onClick={stopAttempt} disabled={!inProgress}>
                Stop Quiz
            </button>
            <button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </button>
            <div>Attempts: {numAttempts}</div>
        </div>
    );
}

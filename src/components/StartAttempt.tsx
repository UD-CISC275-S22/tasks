import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function startAttempt() {
        setNumAttempts(numAttempts - 1);
        setInProgress(true);
    }
    function stopAttempt() {
        setInProgress(false);
    }
    function mulligan() {
        setNumAttempts(numAttempts + 1);
    }

    return (
        <div>
            {numAttempts !== 0 && !inProgress && (
                <button onClick={startAttempt}>Start Quiz</button>
            )}
            {inProgress && <button onClick={stopAttempt}>Stop Quiz</button>}
            {inProgress && <button onClick={mulligan}>Mulligan</button>}
        </div>
    );
}

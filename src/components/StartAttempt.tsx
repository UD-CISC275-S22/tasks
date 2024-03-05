import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function setAttempts() {
        setNumAttempts(numAttempts - 1);
    }

    return (
        <div>
            <button onClick={setAttempts}>Start Quiz</button>
            <button onClick={setAttempts}>Stop Quiz</button>
            <button onClick={setAttempts}>Mulligan</button>
        </div>
    );
}

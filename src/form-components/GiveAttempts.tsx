import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    function handleGain() {
        const num = parseInt(requestedAttempts);
        if (!isNaN(num)) {
            setAttemptsLeft((prevNumAttempts) => prevNumAttempts + num);
            setRequestedAttempts("");
        }
    }

    function handleUse() {
        setAttemptsLeft((prevAttempts) => prevAttempts - 1);
    }
    const noAttempts = attemptsLeft === 0;
    return (
        <div>
            <h3>Attempts Left: {attemptsLeft}</h3>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(num) => setRequestedAttempts(num.target.value)}
            />
            <Button onClick={handleUse} disabled={noAttempts}>
                Use
            </Button>
            <Button onClick={handleGain}>Gain</Button>
        </div>
    );
}

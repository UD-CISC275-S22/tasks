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

    const isOutOfAttempts = attemptsLeft === 0;

    return (
        <div>
            <h3>Attempts Left: {attemptsLeft}</h3>
            <Button onClick={handleUse} disabled={isOutOfAttempts}>
                Use
            </Button>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
            />
            <Button onClick={handleGain}>Gain</Button>
        </div>
    );
}

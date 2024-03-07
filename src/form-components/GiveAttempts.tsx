import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleAddAttempt = () => {
        const requested = parseInt(requestedAttempts);
        if (!isNaN(requested)) {
            setAttemptsLeft(attemptsLeft + requested);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <h4>Attempts Left: {attemptsLeft}</h4>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleChange}
                placeholder="Enter # of attempts"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleAddAttempt}>Gain</button>
        </div>
    );
}

import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts);

        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleChange}
                placeholder="Enter number of attempts"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use Attempt
            </button>
            <button onClick={handleGainAttempts}>Gain Attempts</button>
        </div>
    );
}

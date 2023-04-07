import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const decreaseAttempts = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const increaseAttempts = () => {
        const requested = parseInt(requestedAttempts);
        if (isNaN(requested)) {
            return;
        }
        setAttemptsLeft(attemptsLeft + requested);
        setRequestedAttempts("");
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <button onClick={decreaseAttempts} disabled={attemptsLeft <= 0}>
                Use
            </button>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
            />
            <button onClick={increaseAttempts}>Gain</button>
        </div>
    );
}

import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(e.target.value);
    };

    const useAttempt = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    const gainAttempts = () => {
        const gain = parseInt(requestedAttempts);
        if (!isNaN(gain)) {
            setAttemptsLeft(attemptsLeft + gain);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                placeholder="Enter attempts to gain"
            />
            <br />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}

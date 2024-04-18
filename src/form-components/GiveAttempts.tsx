import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    // State for the number of attempts left
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    // State for the number of attempts the user wants to add
    const [requestedAttempts, setRequestedAttempts] = useState(0);

    // Function to handle using an attempt
    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    // Function to handle gaining attempts
    const gainAttempts = () => {
        if (requestedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) =>
                    setRequestedAttempts(parseInt(e.target.value) || 0)
                }
                placeholder="Enter number of attempts to gain"
            />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}

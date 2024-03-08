import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    // State to manage the number of attempts left
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);

    // State to manage the number of attempts requested
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={(event) => setRequestedAttempts(event.target.value)}
                placeholder="Enter number of attempts"
            />
            <button
                onClick={() => {
                    if (attemptsLeft > 0) {
                        setAttemptsLeft(attemptsLeft - 1);
                    }
                }}
                disabled={attemptsLeft === 0}
            >
                Use
            </button>
            <button
                onClick={() => {
                    const requested = parseInt(requestedAttempts);
                    if (!isNaN(requested)) {
                        setAttemptsLeft(attemptsLeft + requested);
                        setRequestedAttempts("");
                    }
                }}
            >
                Gain
            </button>
        </div>
    );
}

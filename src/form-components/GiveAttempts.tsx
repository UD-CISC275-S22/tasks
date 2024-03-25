import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsToGain, setAttemptsToGain] = useState<string>("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts - 1);
        }
    };

    const handleGainAttempts = () => {
        const attemptsToAdd = parseInt(attemptsToGain);
        if (!isNaN(attemptsToAdd) && attemptsToAdd > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts + attemptsToAdd);
            setAttemptsToGain("");
        }
    };

    const handleAttemptsToGainChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAttemptsToGain(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={attemptsToGain}
                onChange={handleAttemptsToGainChange}
                min="1"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}

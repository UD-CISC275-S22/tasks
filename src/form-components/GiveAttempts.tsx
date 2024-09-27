import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3); // Initial attempts
    const [requestedAttempts, setRequestedAttempts] = useState<string>(""); // Input for gaining attempts

    // Handle the "use" button, decreasing attempts by 1
    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    // Handle the "gain" button, increasing attempts by requested number
    const handleGainAttempts = () => {
        const attemptsToAdd = parseInt(requestedAttempts); // Parse the input string to an integer
        if (!isNaN(attemptsToAdd)) {
            setAttemptsLeft(attemptsLeft + attemptsToAdd);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>

            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => {
                    setRequestedAttempts(e.target.value);
                }} // Update the input field
                placeholder="Enter attempts to gain"
            />

            <div>
                <Button
                    onClick={handleUseAttempt}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>
                <Button onClick={handleGainAttempts}>Gain</Button>
            </div>
        </div>
    );
}

import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [amountToGive, setAmountToGive] = useState<string | number>("");

    const useAttempt = () => {
        if (attempts > 0) {
            setAttempts((prev) => prev - 1);
        }
    };

    const gainAttempts = () => {
        const toAdd = parseInt(amountToGive as string, 10);
        if (!isNaN(toAdd)) {
            setAttempts((prev) => prev + toAdd);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <span>Attempts: {attempts}</span>
                <button onClick={useAttempt} disabled={attempts <= 0}>
                    Use
                </button>
            </div>
            <div>
                <input
                    type="number"
                    value={amountToGive}
                    onChange={(e) => setAmountToGive(e.target.value)}
                    role="spinbutton"
                />
                <button onClick={gainAttempts}>Gain</button>
            </div>
        </div>
    );
}

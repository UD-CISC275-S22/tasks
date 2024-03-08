import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAttemptsRequested(parseInt(event.target.value));
    };
    const use = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };
    const gain = () => {
        if (attemptsRequested > 0 && !isNaN(attemptsRequested)) {
            setAttemptsLeft(attemptsLeft + attemptsRequested);
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <form>
                <label>Attemps Remaining:</label>
                <input
                    type="number"
                    value={attemptsRequested}
                    onChange={handleChange}
                />
                <Button onClick={use} disabled={attemptsLeft === 0}>
                    use
                </Button>
                <Button onClick={gain}>gain</Button>
            </form>
            {attemptsLeft > 0} <div>{attemptsLeft}</div>
        </div>
    );
}

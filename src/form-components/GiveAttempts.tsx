import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const gainValue = parseInt(requestedAttempts) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <Form.Group controlId="giveAttemptsInput">
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(e.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + gainValue);
                }}
            >
                gain
            </Button>
        </div>
    );
}

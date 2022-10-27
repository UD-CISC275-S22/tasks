import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function updateBox(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(parseInt(event.target.value) || 0);
    }

    return (
        <div>
            <Form.Group controlId="form answer text">
                <Form.Label>Check Answer: </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateBox}
                ></Form.Control>
            </Form.Group>
            <Button
                //Button to use attempts
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                Use
            </Button>
            <Button
                // Button to gain attempts
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + requestedAttempts)
                }
            >
                Gain
            </Button>
            Attempts Left: {attemptsLeft}
        </div>
    );
}

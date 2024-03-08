import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of Attempts Remaining: {attemptsLeft}</span>

            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Number of Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>

            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + attemptsRequested)
                }
            >
                gain
            </Button>
        </div>
    );
}

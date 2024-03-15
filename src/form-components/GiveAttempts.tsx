import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attLeft, setAttemptsLeft] = useState<number>(3);
    const [attRequested, setAttemptsRequested] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of Attempts Remaining: {attLeft}</span>

            <Form.Group controlId="formAttemptsRequested">
                <Form.Label>Number of Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={attRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>

            <Button
                onClick={() => setAttemptsLeft(attLeft - 1)}
                disabled={attLeft === 0}
            >
                use
            </Button>
            <Button onClick={() => setAttemptsLeft(attLeft + attRequested)}>
                gain
            </Button>
        </div>
    );
}

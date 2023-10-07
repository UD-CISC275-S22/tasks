import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + parseInt(requestedAttempts))
                }
                disabled={requestedAttempts == ""}
            >
                Gain
            </Button>
            Attempts Left: {attemptsLeft}
            <Form.Group controlId="form GiveAttempts">
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}

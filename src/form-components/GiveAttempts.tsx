import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");
    const stringToInt = parseInt(requests) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attempts}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>
                    Enter the number of attempts you want to add:
                </Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequests(event.target.value)
                    }
                />
            </Form.Group>
            <span>
                <Button onClick={() => setAttempts(stringToInt + attempts)}>
                    Gain
                </Button>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts === 0}
                >
                    Use
                </Button>
            </span>
        </div>
    );
}

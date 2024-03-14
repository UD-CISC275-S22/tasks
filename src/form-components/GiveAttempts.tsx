import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function addRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(parseInt(event.target.value) || 0);
    }

    function addAttempts(): void {
        setAttempts(attempts + requestedAttempts);
    }

    function removeAttempt(): void {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>
                    How many attempts would you like to give yourself? You have{" "}
                    {attempts} left.
                </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={addRequested}
                />
            </Form.Group>
            <Button onClick={addAttempts}>Gain</Button>
            <Button onClick={removeAttempt} disabled={attempts === 0}>
                Use
            </Button>
        </div>
    );
}

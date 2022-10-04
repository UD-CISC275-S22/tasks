import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    const updateRequestedAttempts = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        if (/^\d+$/.test(value)) {
            const valInt: number = parseInt(value);
            setRequestedAttempts(valInt);
        }
    };

    return (
        <>
            <div>
                <h3>Give Attempts</h3>
            </div>
            <Form.Group
                controlId="forGiveAttempts"
                style={{ width: 100, alignSelf: "center" }}
            >
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                />
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={!attempts}
                >
                    Use
                </Button>
                <Button
                    onClick={() => setAttempts(attempts + requestedAttempts)}
                >
                    Gain
                </Button>
            </Form.Group>
            <p>Attempts: {attempts}</p>
        </>
    );
}

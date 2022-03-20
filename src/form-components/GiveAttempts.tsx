import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsleft, setAttemptsLeft] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>You have {attemptsleft} attempts left.</p>

            <Form.Group controlId="formAttempts">
                <Form.Label># of Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: ChangeEvent) =>
                        setRequest(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>

            <Button
                onClick={() => {
                    setAttemptsLeft((current: number) => current + request);
                }}
            >
                Gain
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft((current: number) => current - 1);
                }}
                disabled={attemptsleft === 0}
            >
                Use
            </Button>
        </div>
    );
}

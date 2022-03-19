import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="requestedAttempts">
                <Form.Label>Number of requested attempts:</Form.Label>
                <Form.Control
                    value={requests}
                    type="number"
                    onChange={(event: ChangeEvent) =>
                        setRequests(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button onClick={() => setAttempts(attempts + requests)}>
                Gain
            </Button>
            Number of attempts left: {attempts}
        </div>
    );
}

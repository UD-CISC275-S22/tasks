import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [numRequest, setNumRequest] = useState<number>(0);
    return (
        <div>
            <Form.Group controlId="GiveAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumRequest(parseInt(event.target.value))
                    }
                />
                <Button>Use</Button>
                <Button>Gain</Button>
                <h3>Remaining Attempts: {remainingAttempts}</h3>
            </Form.Group>
            <h3>Give Attempts</h3>
        </div>
    );
}

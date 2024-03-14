import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): JSX.Element {
    const [leftAttempts, setleftAttempts] = useState<number>(3);
    const [requestAttempts, updatedRequestAttempts] = useState<number>(0);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(event.target.value))) {
            updatedRequestAttempts(parseInt(event.target.value));
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts:{leftAttempts}</div>
            <Form.Group controlId="formAttempts">
                <Form.Label></Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={updateAttempts}
                />
            </Form.Group>
            <Button
                onClick={() => setleftAttempts(leftAttempts - 1)}
                disabled={leftAttempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => setleftAttempts(leftAttempts + requestAttempts)}
            >
                gain
            </Button>
        </div>
    );
}

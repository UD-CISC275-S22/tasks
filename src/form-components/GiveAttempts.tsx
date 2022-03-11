import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    function addAttempts(): void {
        if (!isNaN(request)) {
            setAttempts(attempts + request);
        }
    }

    function use(): void {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Increase attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(parseInt(event.target.value))
                    }
                />
                {attempts}
            </Form.Group>
            <Button onClick={() => use()} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={() => addAttempts()}>gain</Button>
        </div>
    );
}

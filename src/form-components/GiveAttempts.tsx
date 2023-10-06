import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }
    function addAttempts(): void {
        setAttempts(attempts + parseInt(request) || attempts + 0);
    }
    function deleteAttempts(): void {
        setAttempts(attempts - parseInt(request) || attempts - 0);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttemptInput">
                <Form.Label>Attempts: {attempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                ></Form.Control>
                <Button onClick={addAttempts}>gain</Button>
                <Button onClick={deleteAttempts} disabled={attempts === 0}>
                    use
                </Button>
            </Form.Group>
        </div>
    );
}

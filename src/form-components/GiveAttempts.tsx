import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }

    function use(): void {
        attempts > 0 ? setAttempts(attempts - 1) : setAttempts;
    }

    function gain(): void {
        const parsed = parseInt(requested);
        !isNaN(parsed) && !(attempts + parsed <= 0)
            ? setAttempts(attempts + parsed)
            : setAttempts;
        setRequested("");
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>You have {attempts} left.</Form.Label>
                <Button onClick={use} disabled={attempts <= 0}>
                    use
                </Button>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateAttempts}
                ></Form.Control>
            </Form.Group>
            <Button onClick={gain}>gain</Button>
        </div>
    );
}

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setRequestedAttempts(event.target.value);
    }

    function useAttempt(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts(): void {
        const parsed = parseInt(requestedAttempts);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    }

    return (
        <div>
            <div>Attempts left: {attemptsLeft}</div>
            <Form.Group controlId="requested-attempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>{" "}
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}

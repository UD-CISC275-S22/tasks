import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateReAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }

    function useButton() {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts - 1);
        }
    }

    function gainButton() {
        const int = parseInt(requestedAttempts);
        if (!isNaN(int) && int > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts + int);
            setRequestedAttempts("");
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts Left: {attemptsLeft}</div>
            <Form.Group controlId="attemptRequestBox">
                <Form.Label>Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateReAttempts}
                ></Form.Control>
            </Form.Group>
            <Button onClick={useButton} disabled={attemptsLeft === 0}>
                Use
            </Button>
            <Button onClick={gainButton}>Gain</Button>
        </div>
    );
}

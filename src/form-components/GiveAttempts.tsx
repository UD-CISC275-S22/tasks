import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAttempt, setRequestAttempt] = useState<number>(0);
    const attemptRequest = () => {
        if (requestAttempt > 0 && !isNaN(requestAttempt)) {
            setAttemptsLeft(attemptsLeft + requestAttempt);
        }
    };

    const useAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestAttempt(parseInt(event.target.value));
    };
    return (
        <div>
            <Form.Group controlId="attemptsLeft">
                <Form.Label>Attempts Left: {attemptsLeft}</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempt}
                    onChange={handleInputChange}
                />
                <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                    use
                </Button>
                <Button onClick={attemptRequest}>gain</Button>
            </Form.Group>
        </div>
    );
}

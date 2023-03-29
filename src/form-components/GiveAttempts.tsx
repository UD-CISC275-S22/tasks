import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<number>(0);

    function attemptsDec(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }
    function attempts(): void {
        isNaN(attemptsReq)
            ? setAttemptsLeft(attemptsLeft)
            : setAttemptsLeft(attemptsReq + attemptsLeft);
    }

    return (
        <div>
            <h3> Give Attempts </h3>
            <Form.Group controlId="formAttempts">
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsReq(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button onClick={attemptsDec} disabled={attemptsLeft <= 0}>
                Use:
            </Button>
            <Button onClick={attempts}>Gain</Button>
            <div> Current Attempts: {attemptsLeft}</div>
        </div>
    );
}

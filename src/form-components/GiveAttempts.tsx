import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function decreaseAttempts(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function increaseAttempts(): void {
        if (isNaN(parseInt(attemptsRequested))) {
            setAttemptsLeft(attemptsLeft);
        } else {
            setAttemptsLeft(attemptsLeft + parseInt(attemptsRequested));
        }
    }

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsRequested(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                Number of attempts = <span>{attemptsLeft}</span>
            </div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>
                <Button
                    onClick={decreaseAttempts}
                    disabled={attemptsLeft === 0}
                >
                    use
                </Button>
            </div>
            <div>
                <Button onClick={increaseAttempts}>gain</Button>
            </div>
        </div>
    );
}

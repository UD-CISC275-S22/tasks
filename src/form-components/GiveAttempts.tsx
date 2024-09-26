import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsAsked, setAttemptsAsked] = useState<number>(0);
    function removeAttempt() {
        setAttemptsRemaining(attemptsRemaining - 1);
    }
    function addAttempt() {
        let attempts = attemptsRemaining;
        if (!Number.isInteger(attemptsAsked)) {
            attempts = attemptsRemaining;
        } else {
            attempts = attemptsRemaining + attemptsAsked;
        }
        setAttemptsRemaining(attempts);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="Attempts">
                <Form.Label>Attempts: {attemptsRemaining}</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsAsked}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsAsked(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={removeAttempt}
                    disabled={attemptsRemaining === 0}
                >
                    use
                </Button>
                <Button onClick={addAttempt}>gain</Button>
            </div>
        </div>
    );
}

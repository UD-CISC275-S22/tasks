import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
/*
The GiveAttempts component simulates a user taking a quiz with a limited number of attempts, but also provides a way for them to gain as many attempts as they want via a numeric input box.

You will need a state to represent the number of attempts the user has left, and another state to represent the number of attempts they are requesting.
The initial number of attempts left should be 3.
The number of attempts left should be visible.
There should be a numeric input box where the user can specify their requested number of attempts.
There should be two buttons, one labeled use that decreases the attempts by one and one labeled gain that increases the attempts by the amount in the input box.
If the user attempts to request an invalid amount (e.g., the empty string "") that cannot be parsed as an integer, then do not change their number of attempts.
When the user is out of attempts, the use button should be disabled
*/
export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    function decreaseAttempts(): void {
        setAttempts(attemptsLeft - 1);
    }
    function increaseAttempts(): void {
        const requestedAttemptsInt = parseInt(requestedAttempts);
        if (!Number.isNaN(requestedAttemptsInt)) {
            setAttempts(attemptsLeft + requestedAttemptsInt);
            setRequestedAttempts("");
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="FormAttempts">
                <Form.Label>Type how many attempts you would like</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <div>You have {attemptsLeft} attempts remaining</div>
            <Button onClick={decreaseAttempts} disabled={attemptsLeft === 0}>
                Use
            </Button>
            <Button onClick={increaseAttempts}>Gain</Button>
        </div>
    );
}

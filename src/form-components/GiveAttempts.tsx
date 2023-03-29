import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [requesting, setRequesting] = useState<number>(0); //set to visible

    //The GiveAttempts component simulates a user taking a quiz with a limited number of attempts, but also provides a way for them to gain as many attempts as they want via a numeric input box.
    //There should be a numeric input box where the user can specify their requested number of attempts.
    // gain increases the attempts by the amount in the input box.

    function userInput(event: React.ChangeEvent<HTMLInputElement>) {
        setRequesting(parseInt(event.target.value));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <h5>Number of attemps left = {attempt}</h5>
            <div>
                <Form.Group controlId="attemps">
                    <Form.Label>How many attempts would you like?</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={userInput}
                    ></Form.Control>
                </Form.Group>
            </div>
            <Button
                onClick={() => setAttempt(attempt - 1)}
                disabled={attempt < 1}
            >
                Use
            </Button>
            <Button onClick={() => setAttempt(attempt + requesting)}>
                Gain
            </Button>
        </div>
    );
}

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [amountRequested, setAmountRequested] = useState<string>("0");
    const attemptCount: number = parseInt(amountRequested) || 0;

    function decreaseAttempts() {
        //how the use button function
        setAttempts(attempts - 1);
    }

    function updateAttempts() {
        //adds requested attempts to current amount of attempts
        setAttempts(attemptCount + attempts);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={amountRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAmountRequested(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            {/*<div>Requested: {attemptCount}</div>*/}
            <div>attempts: {attempts}</div>
            <Button onClick={updateAttempts}>gain</Button>
            <Button onClick={decreaseAttempts} disabled={attempts === 0}>
                use
            </Button>
        </div>
    );
}

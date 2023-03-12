import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    //need: state to represent # of attempts the user has left + another state to represent the # of attempts they are requesting-
    //numeric input box where the user can specify their requested number of attempts-
    //two buttons
    //button 1: use - decreases the attempts by one
    //button 2: gain - increase the attempts by the amount in the input box

    //if the user attempts to request an invalid amount that can't be parsed as an int, don't change their number of attempts

    //simplify type definition of the changeEvent
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    //state
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function loseAttempt() {
        //const attempts = attemptsLeft - 1 || 0;
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempt() {
        let attempts = attemptsLeft;
        if (!Number.isInteger(attemptsRequested)) {
            attempts = attemptsLeft;
        } else {
            attempts = attemptsLeft + attemptsRequested;
        }

        setAttemptsLeft(attempts);
        //const attempts = attemptsLeft + attemptsRequested || attemptsLeft;
        //setAttemptsLeft(attempts);
    }

    return (
        //<div>
        //<h3>Give Attempts</h3>
        //</div>
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="Attempts">
                <Form.Label>Attempts: {attemptsLeft}</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsRequested(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={loseAttempt} disabled={attemptsLeft === 0}>
                    Use
                </Button>
                <Button onClick={gainAttempt}>Gain</Button>
            </div>
        </div>
    );
}

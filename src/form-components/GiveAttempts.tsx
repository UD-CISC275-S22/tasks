// import { stringify } from "querystring";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttempts] = useState<string>("3");
    const [attemptsRequested, typeAttempts] = useState<string>("0");

    function use(): void {
        if (attemptsLeft !== "") {
            setAttempts((parseInt(attemptsLeft) - 1).toString());
        }
    }

    function gain(): void {
        if (attemptsRequested !== "") {
            setAttempts(
                (
                    parseInt(attemptsRequested) + parseInt(attemptsLeft)
                ).toString()
            );
        }
    }

    return (
        <div>
            <Form.Group controlId="numerictextbox">
                <Form.Label>Request Attempt:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        typeAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <div>Attempts left: {attemptsLeft}</div>
            <Button onClick={use} disabled={attemptsLeft === "0"}>
                Use
            </Button>
            <Button onClick={gain}>Gain</Button>

            <div>
                <h3>Give Attempts</h3>
            </div>
        </div>
    );
}

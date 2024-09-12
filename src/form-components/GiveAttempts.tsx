import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, updateAttempts] = useState<number>(3);
    const [attemptsRequesting, attemptsRequested] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label> Check Answer: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequesting}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        attemptsRequested(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => updateAttempts(attemptsLeft - 1)}
                disabled={attemptsLeft == 0 ? true : false}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    updateAttempts(
                        attemptsLeft + (parseInt(attemptsRequesting) || 0)
                    )
                }
            >
                gain
            </Button>
            Attempts Left: {attemptsLeft}
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <Form.Group controlId="formAnswer">
                <Form.Label> Check Answer: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsReq(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft == 0 ? true : false}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + (parseInt(attemptsReq) || 0))
                }
            >
                gain
            </Button>
        </div>
    );
}

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(NaN);

    function changeAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const numRequested = parseInt(event.target.value);
        Number.isNaN(numRequested)
            ? setAttemptsRequested(0)
            : setAttemptsRequested(numRequested);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <div>
                <Form.Group controlId="formAttemptsRequested">
                    <Form.Label>
                        How Many Attempts Would You Like?
                        <br></br>
                    </Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={changeAttemptsRequested}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft === 0 ? true : false}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setAttemptsLeft(attemptsLeft + attemptsRequested)
                    }
                >
                    gain
                </Button>
            </div>
        </div>
    );
}

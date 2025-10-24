import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");
    const parseAttempts = parseInt(attemptsRequested, 10);
    const isNumber = !isNaN(parseAttempts);

    return (
        <>
            <div>
                <Form.Group controlId="formAttemptsRequests">
                    <Form.Label>Attempts Requested:</Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setAttemptsRequested(event.target.value);
                        }}
                    />
                </Form.Group>
                <div>Attempts left: {attemptsLeft}</div>
                <Button
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft - 1);
                    }}
                    disabled={attemptsLeft <= 0}
                >
                    use{" "}
                </Button>
                <Button
                    onClick={() => {
                        if (isNumber && parseAttempts > 0) {
                            setAttemptsLeft(attemptsLeft + parseAttempts);
                            setAttemptsRequested("");
                        }
                    }}
                >
                    {" "}
                    gain{" "}
                </Button>
            </div>
        </>
    );
}

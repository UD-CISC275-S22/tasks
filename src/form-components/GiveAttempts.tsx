import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [numRequest, setNumRequest] = useState<number>(0);
    return (
        <div>
            <Form.Group controlId="GiveAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumRequest(
                            Math.abs(parseInt(event.target.value)) || 0
                        )
                    }
                />
                <Button
                    onClick={() => {
                        setRemainingAttempts(remainingAttempts - 1);
                    }}
                    disabled={remainingAttempts <= 0 ? true : false}
                >
                    Use
                </Button>
                <Button
                    onClick={() => {
                        setRemainingAttempts(remainingAttempts + numRequest);
                    }}
                >
                    Gain
                </Button>
                <h3>Remaining Attempts: {remainingAttempts}</h3>
            </Form.Group>
        </div>
    );
}

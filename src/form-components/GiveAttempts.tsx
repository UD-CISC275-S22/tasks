import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [numRequest, setNumRequest] = useState<string>("");
    const handleGainAttempts = () => {
        const requestAmount = parseInt(numRequest, 10);
        if (!isNaN(requestAmount) && requestAmount > 0) {
            setRemainingAttempts(remainingAttempts + requestAmount);
        }
    };

    const handleUseAttempt = () => {
        if (remainingAttempts > 0) {
            setRemainingAttempts(remainingAttempts - 1);
        }
    };

    return (
        <div>
            <h3>Quiz Attempts</h3>
            <div>Attempts Left: {remainingAttempts}</div>
            <Form>
                <Form.Group controlId="formAttemptsRequest">
                    <Form.Label>Request More Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={numRequest}
                        onChange={(e) => setNumRequest(e.target.value)}
                        aria-label="Request Attempts"
                    />
                </Form.Group>
                <Button
                    onClick={handleUseAttempt}
                    disabled={remainingAttempts <= 0}
                    variant="primary"
                >
                    Use
                </Button>{" "}
                <Button onClick={handleGainAttempts} variant="success">
                    Gain
                </Button>
            </Form>
        </div>
    );
}

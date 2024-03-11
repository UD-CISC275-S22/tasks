import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    function handleUseAttempt() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }
    function handleGainAttempts() {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttempts(attempts + parsedAttempts);
            setRequestedAttempts("");
        }
    }
    return (
        <div>
            <div>Give Attempts</div>
            <div>Attempts left: {attempts}</div>
            <div>
                <Form.Group controlId="formAttempt">
                    <Form.Label>How much do you want? </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter answer"
                        value={requestedAttempts}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </div>
            <Button onClick={handleUseAttempt} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={handleGainAttempts}>Gain</Button>
        </div>
    );
}

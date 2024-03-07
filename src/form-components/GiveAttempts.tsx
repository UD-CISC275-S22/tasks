import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<string>("");

    function handleGainClick(): void {
        setAttempts(
            attempts +
                (parseInt(requestAttempts) ? parseInt(requestAttempts) : 0)
        );
    }

    function handleUseClick(): void {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Current Attempts: {attempts}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestAttempts(event.target.value)
                    }
                    placeholder="How many attempts to add?"
                />
            </Form.Group>
            <Button onClick={() => handleGainClick()}>gain</Button>
            <Button onClick={() => handleUseClick()} disabled={attempts == 0}>
                use
            </Button>
        </div>
    );
}

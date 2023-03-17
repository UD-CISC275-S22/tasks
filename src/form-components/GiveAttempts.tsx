import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function handleGain(request: string) {
        const num = parseInt(request);
        if (!isNaN(num)) {
            setNumAttempts(num + numAttempts);
        }
    }
    function handleUse() {
        setNumAttempts((prevNumAttempts) => prevNumAttempts - 1);
    }
    const noAttempts = numAttempts === 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Add Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={handleUse} disabled={noAttempts}>
                use
            </Button>
            <Button onClick={() => handleGain(requestedAttempts)}>gain</Button>

            <div>Attempts Remaining: {numAttempts}</div>
        </div>
    );
}

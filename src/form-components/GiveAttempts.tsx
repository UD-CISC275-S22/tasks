import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [requiredAttempts, setRequiredAttempts] = useState<string>("0");
    const intRequiredAttempts = parseInt(requiredAttempts) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Left: {remainingAttempts}
            <Form.Group>
                <Form.Control
                    type="number"
                    value={requiredAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequiredAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setRemainingAttempts(remainingAttempts - 1)}
                disabled={remainingAttempts == 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setRemainingAttempts(
                        remainingAttempts + intRequiredAttempts
                    )
                }
            >
                Gain
            </Button>
        </div>
    );
}

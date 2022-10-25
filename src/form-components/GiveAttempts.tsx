import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsNum, setattemptsNum] = useState<number>(3);
    const [reqAttempts, setreqAttempts] = useState<string>("0");
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsNum}.</div>
            <Button
                onClick={() =>
                    setattemptsNum(attemptsNum + (parseInt(reqAttempts) || 0))
                }
            >
                gain
            </Button>
            <Button
                onClick={() => setattemptsNum(attemptsNum - 1)}
                disabled={attemptsNum == 0}
            >
                use
            </Button>
            <Form.Group controlId="AttempsRequestedForm">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setreqAttempts(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}

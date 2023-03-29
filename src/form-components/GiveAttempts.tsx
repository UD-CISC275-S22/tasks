import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [Attempts, setAttempts] = useState<number>(3);
    const [RAttempts, setRAttempts] = useState<string>("0");
    const intAttempts = parseInt(RAttempts) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Left: {Attempts}
            <Form.Group>
                <Form.Control
                    type="number"
                    value={RAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(Attempts - 1)}
                disabled={Attempts == 0}
            >
                use
            </Button>
            <Button onClick={() => setAttempts(Attempts + intAttempts)}>
                Gain
            </Button>
        </div>
    );
}

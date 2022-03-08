import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [added, setAdded] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type="number"
                    value={added}
                    onChange={(event: ChangeEvent) =>
                        setAdded(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button onClick={() => setAttempts(attempts + added)}>Gain</Button>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={0 === attempts}
            >
                Use
            </Button>
            <div>Number of Attempts: {attempts}</div>
        </div>
    );
}

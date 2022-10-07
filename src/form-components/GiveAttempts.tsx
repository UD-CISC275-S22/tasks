import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setattempts] = useState<number>(3);
    const [inpt, setinpt] = useState<string>("");
    function updateinpt(event: React.ChangeEvent<HTMLInputElement>): void {
        setinpt(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formGiveAttempt">
                <Form.Label></Form.Label>
                <Form.Control
                    value={inpt}
                    onChange={updateinpt}
                    type="number"
                />
            </Form.Group>
            <span>Attempts: {attempts}</span>
            <Button
                onClick={() => setattempts(attempts + (parseInt(inpt) || 0))}
            >
                gain
            </Button>
            <Button
                onClick={() => setattempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
        </div>
    );
}

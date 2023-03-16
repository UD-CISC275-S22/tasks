import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    function updateValue(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }
    function updateAttempts(s: string) {
        if (!isNaN(+s) && !isNaN(parseFloat(s))) {
            const x = +s;
            setAttempts(attempts + x);
        }
    }
    const [attempts, setAttempts] = useState<number>(3);
    const [value, setValue] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Number of attempts left: {attempts}</p>
            <Form.Group controlId="formCorrectAnswer">
                <Form.Control
                    type="number"
                    value={value}
                    onChange={updateValue}
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts <= 0}
            >
                Use
            </Button>
            <Button onClick={() => updateAttempts(value)}>Gain</Button>
            <div></div>
        </div>
    );
}

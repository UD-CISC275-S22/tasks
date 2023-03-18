import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [checking, setChecking] = useState<string>("❌");
    function updateInput(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        setInput(event.target.value);
        const eventInput: string = event.target.value;
        setInput(event.target.value);
        if (eventInput === expectedAnswer) {
            setChecking("✔️");
        } else {
            setChecking("❌");
        }
    }
    return (
        <div>
            <div>
                <h3>Check Answer</h3>
                {checking}
            </div>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Short Question Response:</Form.Label>
                <Form.Control value={input} onChange={updateInput} />
            </Form.Group>
        </div>
    );
}

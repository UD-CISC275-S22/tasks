import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [input, setInput] = useState<string>("");

    function updateInput(event: ChangeEvent): void {
        setInput(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={input}
                    onChange={updateInput}
                />
            </Form.Group>
            {expectedAnswer === input && <div>✔️</div>}
            {expectedAnswer !== input && <div>❌</div>}
        </div>
    );
}

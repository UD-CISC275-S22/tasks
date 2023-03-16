import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    const [name, setName] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCorrectAnswer">
                <Form.Label>
                    What is the answer to the whole universe?
                </Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div>
                {name} is {name === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}

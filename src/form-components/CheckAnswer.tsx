import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setans] = useState<string>("");
    function updateans(event: React.ChangeEvent<HTMLInputElement>) {
        setans(event.target.value);
    }

    return (
        <span>
            <Form.Group controlId="formCheckAns">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={ans} onChange={updateans} />
            </Form.Group>
            {ans === expectedAnswer ? "✔️" : "❌"}
        </span>
    );
}

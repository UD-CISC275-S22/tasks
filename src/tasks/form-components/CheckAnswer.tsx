import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>

            <Form.Group controlId="formAnswer">
                <Form.Label>What is the Answer? (Hint: 42)</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>

            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

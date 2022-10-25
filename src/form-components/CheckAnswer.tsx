import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [inAnswer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control value={inAnswer} onChange={updateAnswer} />
            </Form.Group>
            <p>{inAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function newAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="Check Answer">
                <Form.Label>Enter Answer:</Form.Label>
                <Form.Control value={answer} onChange={newAnswer} />
            </Form.Group>
            <div> {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

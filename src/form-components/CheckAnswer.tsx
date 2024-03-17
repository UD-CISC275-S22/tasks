import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface Answer {
    expectedAnswer: string;
}
export function CheckAnswer({ expectedAnswer }: Answer): JSX.Element {
    const [answer, setanswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setanswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="expect">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

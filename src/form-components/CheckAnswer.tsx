import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>
                    What is the answer to Life, the Universe, and everything in
                    it?
                </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>{answer === expectedAnswer ? <p>✔️</p> : <p>❌</p>}</div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="formAnswer">
                    <Form.Label>Your Answer:</Form.Label>
                    <Form.Control
                        value={answer}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAnswer(event.target.value)}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

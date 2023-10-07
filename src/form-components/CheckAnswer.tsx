import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [uAnswer, setUanswer] = useState<string>("");

    function updateUanswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUanswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="form UserAnswer">
                <Form.Control value={uAnswer} onChange={updateUanswer} />
            </Form.Group>
            <div>{uAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type Answer = React.ChangeEvent<HTMLInputElement>;

    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: Answer) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checking answers">
                <Form.Label>Enter Answer:</Form.Label>
                <Form.Control
                    type="checking answers"
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <span>{expectedAnswer === answer ? "✔️" : "❌"}</span>
        </div>
    );
}

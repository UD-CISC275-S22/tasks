import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

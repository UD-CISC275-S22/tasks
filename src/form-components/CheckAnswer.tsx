import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [input, setInput] = useState<string>("");

    function typeAnswer(event: ChangeEvent) {
        setInput(event.target.value);
    }
    return (
        <div>
            <h5>Check Answer</h5>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check your answer here: </Form.Label>
                <Form.Control value={input} onChange={typeAnswer} />
            </Form.Group>
            <option> Your answer is: </option>
            {input === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

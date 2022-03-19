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
    const [input, userInput] = useState<string>("");

    function changeInput(event: ChangeEvent) {
        userInput(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check your answer here: </Form.Label>
                <Form.Control value={input} onChange={changeInput} />
            </Form.Group>
            <option> Your answer is: </option>
            {input === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

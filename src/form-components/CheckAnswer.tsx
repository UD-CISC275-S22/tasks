import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check answer here: </Form.Label>
                <Form.Control value={answer} onChange={changeInput} />
            </Form.Group>
            <option> Your answer is: </option>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

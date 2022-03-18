import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(expectedAnswer);
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label>What is your Answer?</Form.Label>
                <Form.Control value={answer} onChange={changeAnswer} />
            </Form.Group>
            {answer == expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

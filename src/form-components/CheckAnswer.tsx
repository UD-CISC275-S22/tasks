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
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function updateGivenAnswer(event: ChangeEvent) {
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formGivenAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={updateGivenAnswer}
                    placeholder="Enter Answer Here"
                ></Form.Control>
            </Form.Group>
            <div>Result: {givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

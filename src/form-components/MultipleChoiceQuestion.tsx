import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userOptions">
                <Form.Label>Choose Your Option</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    <option value={options[0]}>Choice One</option>
                    <option value={options[1]}>Choice Two</option>
                    <option value={options[2]}>Choice Three</option>
                    <option value={options[3]}>Choice Four</option>
                </Form.Select>
            </Form.Group>
            The Answer Given was {choice}.
            {choice && (
                <div>{choice === expectedAnswer ? <p>✔️</p> : <p>❌</p>}</div>
            )}
        </div>
    );
}

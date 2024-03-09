import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>): void {
        setUserChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userMultipleChoiceQuestion">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Select value={userChoice} onChange={updateChoice}>
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                </Form.Select>
            </Form.Group>
            {userChoice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

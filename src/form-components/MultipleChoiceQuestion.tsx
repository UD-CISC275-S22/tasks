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

    const result = userChoice === expectedAnswer ? "✔️" : "❌";
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Select
                    value={userChoice}
                    onChange={(e) => setUserChoice(e.target.value)}
                >
                    {options.map((option: string) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>Result: {result}</p>
        </div>
    );
}

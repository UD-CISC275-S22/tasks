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

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="MultipleChoice">
                <Form.Label>Select an option.</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                >
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

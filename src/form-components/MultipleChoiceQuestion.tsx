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
            <div>
                <Form.Group controlId="formMultipleChoice">
                    <Form.Label>Answer: </Form.Label>
                    <Form.Select
                        value={choice}
                        onChange={(e) => setChoice(e.target.value)}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <span>{choice === expectedAnswer ? "✔️" : "❌"}</span>
            </div>
        </div>
    );
}

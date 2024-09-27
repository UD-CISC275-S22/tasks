import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selection, setSelection] = useState<string>(options[0]);

    function updateSelection(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelection(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="check answer">
                <Form.Label>Choose an Answer: </Form.Label>
                <Form.Select value={selection} onChange={updateSelection}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <span>{expectedAnswer === selection ? "✔️" : "❌"}</span>
        </div>
    );
}

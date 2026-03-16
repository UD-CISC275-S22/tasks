import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceSelect">
                <Form.Label>Select an Answer:</Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setSelected(e.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selected === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

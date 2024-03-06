import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const DEFAULT_CHOICE = options[0];
    const [selected, setSelected] = useState<string>(DEFAULT_CHOICE);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Choose a answer:</Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(event) => setSelected(event.target.value)}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {selected === expectedAnswer ? (
                    <span>✔️</span>
                ) : (
                    <span>❌</span>
                )}
            </div>
        </div>
    );
}

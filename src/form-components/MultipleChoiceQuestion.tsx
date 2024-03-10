import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOpt, setSelectedOpt] = useState("Choose");
    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedOpt(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Choose the correct answer</Form.Label>
                <Form.Select value={selectedOpt} onChange={updateOption}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedOpt === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}

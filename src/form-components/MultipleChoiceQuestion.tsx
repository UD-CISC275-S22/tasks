import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface MCQProps {
    options: string[];
    expectedAnswer: string;
}
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: MCQProps): JSX.Element {
    const [selected, setSelected] = useState<string>("");
    return (
        <div className="box">
            <Form.Group controlId="MCQ">
                <Form.Label>Which of these options is correct?</Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div className="card">
                {selected === expectedAnswer
                    ? "Correct Answer ✔️"
                    : "Wrong Answer ❌ "}
            </div>
        </div>
    );
}

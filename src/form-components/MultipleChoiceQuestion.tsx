import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [uCurrent, setUCurrent] = useState<string>(options[0]);

    function updateCurrent(event: React.ChangeEvent<HTMLSelectElement>) {
        setUCurrent(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Select value={uCurrent} onChange={updateCurrent}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{uCurrent === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [chosen, chooseOption] = useState<string>("");

    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        chooseOption(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiplechoice">
                <Form.Label>Select an answer</Form.Label>
                <Form.Select value={chosen} onChange={updateOption}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{chosen === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

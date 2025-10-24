import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    const isCorrect = choice === expectedAnswer;
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="userChoices">
                <Form.Label>Select an answer:</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}

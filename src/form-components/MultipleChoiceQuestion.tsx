import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function handleChoiceChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <div>Multiple Choice Question</div>
            <Form.Group controlId="userChoice">
                <Form.Label>Select an answer:</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={handleChoiceChange}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {isCorrect ? "✔️" : "❌"}
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

type MultipleChoiceQuestionProps = {
    expectedAnswer: string;
    options: string[];
};

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: MultipleChoiceQuestionProps): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectedChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multiple-choice-question">
                <Form.Label>Choose an answer:</Form.Label>
                <Form.Select value={selectedChoice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

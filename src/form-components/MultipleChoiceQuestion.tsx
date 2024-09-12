import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="formSelectOptions">
                    <Form.Label>What is the correct answer?</Form.Label>
                    <Form.Select value={choice} onChange={updateChoice}>
                        {options.map((currentOption: string) => (
                            <option key={currentOption} value={currentOption}>
                                {currentOption}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>{expectedAnswer === choice ? "✔️" : "❌"}</div>
        </div>
    );
}

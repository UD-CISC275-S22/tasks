import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
        setIsCorrect(event.target.value === expectedAnswer);
    }

    return (
        <>
            <div>
                <h3>Multiple Choice Question</h3>
                <div>
                    <Form.Group controlId="multipleChoice">
                        <Form.Label>Select an answer</Form.Label>
                        <Form.Select value={choice} onChange={updateChoice}>
                            {options.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            {isCorrect ? <div>✔️</div> : <div>❌</div>}
        </>
    );
}

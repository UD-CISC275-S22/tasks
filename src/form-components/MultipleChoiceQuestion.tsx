import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const default_option = options[0];
    const [choice, setChoice] = useState<string>(default_option);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    //function
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="formChoice">
                    <Form.Label>Choice:</Form.Label>
                    <Form.Select value={choice} onChange={updateChoice}>
                        {options.map((option1: string) => (
                            <option key={option1} value={option1}>
                                {option1}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>
                    {choice === expectedAnswer ? (
                        <span>✔️</span>
                    ) : (
                        <span>❌</span>
                    )}
                </div>
            </div>
        </div>
    );
}

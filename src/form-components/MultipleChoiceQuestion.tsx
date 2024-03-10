import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAnswer(event.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="Expected Answer">
                <Form.Label>What is your favorite team?</Form.Label>
                <Form.Select value={answer} onChange={handleInputChange}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

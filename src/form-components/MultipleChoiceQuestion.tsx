import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setanswer] = useState<string>(options[0]);
    function updatechoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setanswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userChoice">
                <Form.Label>What is ypur choice?</Form.Label>
                <Form.Select value={answer} onChange={updatechoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {options}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}

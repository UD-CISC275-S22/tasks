import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [current, setCurrent] = useState<string>(options[0]);

    function updateCurrent(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrent(event?.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Pick an answer:</Form.Label>
                <Form.Select value={current} onChange={updateCurrent}>
                    {options.map((answer: string) => (
                        <option key={answer}>{answer}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {current === expectedAnswer ? <div> ✔️ </div> : <div> ❌ </div>}
            </div>
        </div>
    );
}

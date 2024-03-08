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

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <>
            <div>
                <h3>Multiple Choice Question</h3>
            </div>
            <Form.Group controlId="userAnswer">
                <Form.Label>Select Your Answer</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((op: string) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </>
    );
}

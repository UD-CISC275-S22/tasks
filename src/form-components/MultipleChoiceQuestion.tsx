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
    function newAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <h5>Whats the best ice cream flavor?</h5>
            <Form.Group controlId="favoriteColors">
                <Form.Select value={answer} onChange={newAnswer}>
                    {options.map((a) => (
                        <option key={a} value={a}>
                            {a}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            Your answer is: {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [curChoice, setCurChoice] = useState<string>(options[0]);
    const ans = curChoice === expectedAnswer ? "✔️" : "❌";

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurChoice(event.target.value);
    }

    return (
        <div>
            <div>
                <h1>Multiple Choice Question</h1>
            </div>

            <div>
                <Form.Group controlId="chooseOptions">
                    <Form.Label>What is your favorite color?</Form.Label>
                    <Form.Select value={curChoice} onChange={updateChoice}>
                        {options.map((color: string) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                        ;
                    </Form.Select>
                </Form.Group>
                The answer is: {ans}.
            </div>
        </div>
    );
}

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
    const updateChoice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChoice(event.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Your Choice: </Form.Label>
                <Form.Control
                    type="text"
                    value={choice}
                    onChange={updateChoice}
                />
            </Form.Group>
            Answer: {expectedAnswer === choice ? "✔️" : "❌"}

        </div>
    );
}

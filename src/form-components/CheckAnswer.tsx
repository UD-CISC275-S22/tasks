import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group className="mb-3" controlId="formBasicAnswer">
                <Form.Label>Enter your answer</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter answer"
                    value={answer}
                    onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                    {answer === expectedAnswer ? "✔️ Correct" : "❌ Incorrect"}
                </Form.Text>
            </Form.Group>
        </div>
    );
}

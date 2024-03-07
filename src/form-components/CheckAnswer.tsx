import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Enter your answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={handleInputChange}
                    placeholder="Type answer here"
                />
            </Form.Group>
            <div>{userAnswer == expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

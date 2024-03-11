import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <div>Check Answer</div>
            <div>
                <Form.Group controlId="formAnswer">
                    <Form.Label>Enter your answer:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter answer"
                        value={userAnswer}
                        onChange={handleSubmit}
                    />
                </Form.Group>
            </div>
            <div>{userAnswer == expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

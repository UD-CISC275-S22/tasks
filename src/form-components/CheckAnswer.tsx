import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const result: string = userAnswer === expectedAnswer ? "✔️" : "❌";

    return (
        <div>
            <Form.Group controlId="simpleQuestion">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                />
            </Form.Group>
            <h3>Your answer is: {result}</h3>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    function checkIfCorrect(userAnswer: string): string {
        return userAnswer === expectedAnswer ? "✔️" : "❌";
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="forAnswers">
                <Form.Label>Question:</Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            <p>{checkIfCorrect(userAnswer)}</p>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

type CheckAnswerProps = {
    expectedAnswer: string;
};

export function CheckAnswer({
    expectedAnswer,
}: CheckAnswerProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="check-answer-input">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>

            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

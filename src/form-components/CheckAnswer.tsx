import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
interface CheckerProps {
    expectedAnswer: string;
}

export function CheckAnswer({ expectedAnswer }: CheckerProps): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(e: ChangeEvent) {
        setAnswer(e.target.value);
    }
    return (
        <div>
            <Form.Group className="mb-3" controlId="formCheckAnswer">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Control
                    type="answer"
                    placeholder="Enter your answer."
                    value={answer}
                    onChange={updateAnswer}
                />
                <Form.Text className="text-muted">
                    Hint: The answer is {expectedAnswer}.
                </Form.Text>
            </Form.Group>
            <div className="card">
                {answer === expectedAnswer
                    ? "Correct Answer✔️"
                    : "Wrong Answer ❌"}
            </div>
        </div>
    );
}

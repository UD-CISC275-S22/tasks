import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateUserAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="formCheckAnswer">
                    <Form.Label>Answer Below:</Form.Label>
                    <Form.Control
                        value={userAnswer}
                        onChange={updateUserAnswer}
                    />
                </Form.Group>
            </div>
            <div>
                <h3>{userAnswer === expectedAnswer ? "✔️" : "❌"}</h3>
            </div>{" "}
        </div>
    );
}

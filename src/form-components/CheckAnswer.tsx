import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    return (
        <>
            <div>
                <h3>Check Answer</h3>
            </div>
            <Form.Group
                controlId="forCheckAnswer"
                style={{ width: 100, alignSelf: "center" }}
            >
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <p>Answer: {expectedAnswer === answer ? "✔️" : "❌"}</p>
        </>
    );
}

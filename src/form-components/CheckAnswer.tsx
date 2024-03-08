import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>();
    return (
        <div>
            <Form.Group controlId="CheckAnswerCorrect">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
                <h3>Answer is {answer === expectedAnswer ? "✔️" : "❌"}</h3>
            </Form.Group>
        </div>
    );
}

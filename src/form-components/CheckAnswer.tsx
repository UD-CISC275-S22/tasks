import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function checkAnswer() {
        if (answer === expectedAnswer) {
            return <div>✔️</div>;
        } else {
            return <div>❌</div>;
        }
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswerBox">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>{checkAnswer()}</div>
        </div>
    );
}

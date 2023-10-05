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

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group className="mb-3" controlId="seeExpectedAnswer">
                <Form.Label>Answer here:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>
                Is your answer correct?:{" "}
                {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </div>
    );
}

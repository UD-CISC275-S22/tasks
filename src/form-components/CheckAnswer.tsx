import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;
    const [answer, setAnswer] = useState<string>("");
    function setName(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Label>Answer Box</Form.Label>
            <Form.Control value={answer} onChange={setName} />
            <span>result: {answer == expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}

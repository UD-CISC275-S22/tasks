import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [getanswer, setanswer] = useState<string>("");
    function Check(event: ChangeEvent) {
        setanswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="Answer">
                <Form.Label>Enter the Answer</Form.Label>
                <Form.Control size="sm" value={getanswer} onChange={Check} />
            </Form.Group>
            <div>{getanswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

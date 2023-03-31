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
    const [answer, setAnswer] = useState<string>("");
    function updateInput(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="fromInputAnser">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateInput} />
            </Form.Group>
            <div>
                {answer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
            </div>
        </div>
    );
}

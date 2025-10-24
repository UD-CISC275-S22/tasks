import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    const isCorrect = answer === expectedAnswer;
    return (
        <div>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Enter answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>
                {answer !== "" ?
                    isCorrect ?
                        "✔️"
                    :   "❌"
                :   "❌"}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //This is the state
    // eslint-disable-next-line prettier/prettier

    const [userAnswer, setUserAnswer] = useState<string>("");
    //This Control
    function inputAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        //allows user to input answer
        setUserAnswer(event.target.value);
    }

    //This is the View
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answerBox">
                <Form.Control value={userAnswer} onChange={inputAnswer} />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

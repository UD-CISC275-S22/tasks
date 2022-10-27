import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type updateAnswer = React.ChangeEvent<HTMLInputElement>;

    const [userGivenAnswer, setUserGivenAnswer] = useState<string>("");

    function updateAnswer(event: updateAnswer) {
        setUserGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="CHECKING ANSWERS">
                <Form.Label>Answer</Form.Label>
                <Form.Control value={userGivenAnswer} onChange={updateAnswer} />
            </Form.Group>
            <div>{expectedAnswer === userGivenAnswer ? "✔️" : "❌"} </div>
        </div>
    );
}

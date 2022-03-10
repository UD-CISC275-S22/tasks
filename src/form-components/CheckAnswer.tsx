import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //allows a user to enter an answer to a short answer question, and then displays whether they get it correct or incorrect
    //takes in a parameter representing the expectedAnswer

    //need: state to handle the user's given answer -
    //the user's given answer should initially be the empty string -
    //when the user's given answer matches the expectedAnswer: display check emoji; otherwise display x emoji

    //simplify type definition of the change event
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    //let ans = "";

    //state
    const [answer, setAnswer] = useState<string>("");

    //control ? dk if i need that
    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }

    return (
        // <div>
        //    <h3>Check Answer</h3>
        // </div>
        <div>
            <Form.Group controlId="">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

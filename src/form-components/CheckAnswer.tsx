import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer" as={Row}>
                <Form.Label column sm={1}>
                    Answer Box
                </Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        value={answer}
                        onChange={updateAnswer}
                    ></Form.Control>
                </Col>
            </Form.Group>
            <div>Your Answer: {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

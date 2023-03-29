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
    const [ans, setAns] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        setAns(event.target.value);
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
                        value={ans}
                        onChange={updateAnswer}
                    ></Form.Control>
                </Col>
            </Form.Group>
            <div>Your Answer: {ans === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

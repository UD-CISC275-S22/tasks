import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function userInput(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    function change(): string {
        let total = "";
        if (expectedAnswer === givenAnswer) {
            total = "✔️";
            return total;
        } else {
            total = "❌";
            return total;
        }
    }

    const final = change();

    return (
        <div>
            <h3>Check Answer</h3>
            <h5>expectedAnswer = {expectedAnswer}</h5>
            <div>
                <Form.Group controlId="answerCheck">
                    <Form.Label>Enter your answer</Form.Label>
                    <Form.Control
                        value={givenAnswer}
                        onChange={userInput}
                    ></Form.Control>
                </Form.Group>
                <div>
                    <span>{final}</span>
                </div>
            </div>
        </div>
    );
}

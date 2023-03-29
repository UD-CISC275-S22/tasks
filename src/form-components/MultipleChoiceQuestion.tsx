import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "x-large" }}>Multiple Choice Question</div>
            <Form.Group controlId="multiple-choice">
                <Form.Label>Select a Choice</Form.Label>
                <Form.Select
                    style={{ textAlignLast: "center" }}
                    value={userChoice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        setUserChoice(event.target.value)
                    }
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {userChoice === expectedAnswer ? "✔️" : "❌"}
            <div className="white-space"></div>
        </div>
    );
}

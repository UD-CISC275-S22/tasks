import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    const updateAnswer = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAnswer(event.target.value);
    };

    return (
        <>
            <div>
                <h3>Multiple Choice Question</h3>
            </div>
            <Form.Group
                controlId="forMultipleChoiceQuestion"
                style={{ width: 100, alignSelf: "center" }}
            >
                <Form.Label>Your Answer: </Form.Label>
                <Form.Select value={selectedAnswer} onChange={updateAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>Answer: {expectedAnswer === selectedAnswer ? "✔️" : "❌"}</p>
        </>
    );
}

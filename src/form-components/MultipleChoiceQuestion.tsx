import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const firstEle = options[0];

    const [currentChoice, setCurrentChoice] = useState<string>(firstEle);

    function userInput(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }

    function change(): string {
        let total = "";
        if (expectedAnswer === currentChoice) {
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
            <h3>Multiple Choice Question</h3>
            <h5>expectedAnswer = {expectedAnswer}</h5>
            <Form.Group>
                <Form.Label>
                    <Form.Select value={currentChoice} onChange={userInput}>
                        {options.map((question: string) => (
                            <option key={question} value={question}>
                                {question}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Label>
            </Form.Group>
            The users answer is
            <div>
                <span>{final}</span>
            </div>
        </div>
    );
}

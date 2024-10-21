import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select
                value={selectedAnswer}
                onChange={(e) => {
                    setSelectedAnswer(e.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <p>{selectedAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}

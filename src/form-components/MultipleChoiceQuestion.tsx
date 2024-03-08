import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // State to represent the user's currently selected choice
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    // Function to handle the change in dropdown selection
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(event.target.value);
    };

    // Function to determine if the selected choice is correct
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form>
                <Form.Group controlId="multipleChoiceDropdown">
                    <Form.Label>Select an answer:</Form.Label>
                    <Form.Select
                        value={selectedChoice}
                        onChange={handleChange}
                        aria-label="Select an answer"
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>{isCorrect ? "✔️ Correct" : "❌ Incorrect"}</div>
            </Form>
        </div>
    );
}

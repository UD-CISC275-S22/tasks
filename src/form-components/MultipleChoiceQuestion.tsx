import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice,setChoice]=useState<string>("");
    function choose(event: React.ChangeEvent<HTMLSelectElement>){
        setChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={choice} onChange={choose}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice == expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

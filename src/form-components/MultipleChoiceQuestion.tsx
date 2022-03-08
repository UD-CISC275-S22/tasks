import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    const handleChange = (e: ChangeEvent) => {
        setSelected(e.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="choiceDropdown">
                <Form.Select value={selected} onChange={handleChange}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selected === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

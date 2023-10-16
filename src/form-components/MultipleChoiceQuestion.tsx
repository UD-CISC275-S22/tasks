import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [editChoice, setEditChoice] = useState<string>(options[0]);
    function updateChoice(event: ChangeEvent) {
        setEditChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select value={editChoice} onChange={updateChoice}>
                {options.map((opt: string) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </Form.Select>
            <span>{editChoice == expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}

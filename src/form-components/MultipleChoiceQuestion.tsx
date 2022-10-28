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
    const [selected, setSelection] = useState<string>(options[0]);

    function updateSelection(event: ChangeEvent) {
        setSelection(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="SelectOptions">
                <Form.Label>Select any answer:</Form.Label>
                <Form.Select value={selected} onChange={updateSelection}>
                    {options.map((selection: string) => (
                        <option key={selection} value={selection}>
                            {selection}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{expectedAnswer === selected ? "✔️" : "❌"}</div>
        </div>
    );
}

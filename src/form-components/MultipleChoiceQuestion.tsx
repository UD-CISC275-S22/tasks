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
    const [selection, setSelection] = useState<string>(options[0]);
    function updateSelection(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelection(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Multiple Choice question</h3>
            </div>
            <div>
                <Form.Group controlId="chooseOptions">
                    <Form.Label>what is you faviorate color</Form.Label>
                    <Form.Select value={selection} onChange={updateSelection}>
                        {options.map((option: string) => (
                            <option key={option}>
                                {" "}
                                {option}
                                {Option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {selection === expectedAnswer}? <div>✔️</div> : <div>❌</div>
            </div>
        </div>
    );
}

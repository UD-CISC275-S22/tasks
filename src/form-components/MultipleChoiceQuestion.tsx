import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const DEFAULT_CHOICE = options[0];
    const [selected, setSelected] = useState<string>(DEFAULT_CHOICE);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Choose a answer:</Form.Label>
            </Form.Group>
        </div>
    );
}

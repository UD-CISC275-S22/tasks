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
    const [chosen, setChosen] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="answer-options">
                <Form.Label>Choose the correct answer:</Form.Label>
                <Form.Select
                    value={chosen}
                    onChange={(event: ChangeEvent) =>
                        setChosen(event.target.value)
                    }
                >
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                </Form.Select>
            </Form.Group>
            {expectedAnswer === chosen && <div>✔️</div>}
            {expectedAnswer !== chosen && <div>❌</div>}
        </div>
    );
}

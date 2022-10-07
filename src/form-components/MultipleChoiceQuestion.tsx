import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setans] = useState<string>("");
    function updateans(event: React.ChangeEvent<HTMLSelectElement>): void {
        setans(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="multChoiceQuest">
                <Form.Label>Question?</Form.Label>
                <Form.Select value={ans} onChange={updateans}>
                    {options.map((o: string) => (
                        // eslint-disable-next-line react/no-unknown-property
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {ans === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

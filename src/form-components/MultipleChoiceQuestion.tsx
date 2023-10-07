import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [allOptions] = useState<string[]>(options);
    const [expected] = useState<string>(expectedAnswer);
    const [userChoice, setUserChoice] = useState<string>(allOptions[0]);

    function setUser(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Select
                    style={{ textAlign: "center" }}
                    value={userChoice}
                    onChange={setUser}
                >
                    {allOptions.map((options: string) => (
                        <option key={options} value={options}>
                            {options}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {userChoice == expected ? "✔️" : "❌"}
        </div>
    );
}

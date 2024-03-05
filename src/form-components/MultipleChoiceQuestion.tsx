import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    //This is the state
    const [userChoice, setUserChoice] = useState<string>(options[0]);
    const choices: string[] = [...options];
    //This is the Control
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(event.target.value);
    }
    //This is the View
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Select value={userChoice} onChange={updateChoice}>
                    {choices.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            User choice is {userChoice}
            <div>{userChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

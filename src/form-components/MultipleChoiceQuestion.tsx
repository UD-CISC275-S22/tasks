import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    //allows a user to select an answer from a list in a dropdown
    //displays whether they got it correct or incorrect
    //component takes in a parameter representing the expectedAnswer
    //and a parameter representing the list of options
    

    //need state to represent the user's currently selected choice-
    //the initial state of the selected choice is the first element of the options list-
    //when the user's given answer matches the expectedAnswer, display check; otherwise x

    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="MultipleChoiceQuestion">
                <Form.Label>Choose your answer</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

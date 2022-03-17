import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Question1(): JSX.Element {
    const [flag, setChoice] = useState<string>("");

    function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
        setChoice(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h6>Question1</h6>
            <div>Which flag is ?</div>
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateChoice}
                id="emotion-check-happy"
                label="Happy"
                value="happy"
                checked={flag === "happy"}
            />
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateChoice}
                id="emotion-check-sad"
                label="Sad"
                value="sad"
                checked={flag === "sad"}
            />
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateChoice}
                id="emotion-check-angry"
                label="Angry"
                value="angry"
                checked={flag === "angry"}
            />
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateChoice}
                id="emotion-check-angry"
                label="Angry"
                value="angry"
                checked={flag === "angry"}
            />
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
    title
}: {
    expectedAnswer: string;
    title: string;
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [name, setName] = useState<string>("");
    const [yesOrNo, setYesOrNo] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
        if (event.target.value == expectedAnswer) {
            changeVisible(true);
        } else {
            changeVisible(false);
        }
    }

    function changeVisible(value: boolean) {
        setYesOrNo(value);
    }

    return (
        <div>
            <Form.Group>
                <Form.Label>{title}</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            {yesOrNo ? "✔️" : "❌"}
        </div>
    );
}

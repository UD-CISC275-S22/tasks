import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [userName, setUserName] = useState<string>("");
    const [EditMode, setEditMode] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function updateNames(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Group controlId="name">
                    <Form.Label>What is your name?</Form.Label>
                    <Form.Control
                        type="string"
                        onChange={updateName}
                    ></Form.Control>
                </Form.Group>
            </div>
            <Form.Check
                type="switch"
                id="is-happy-check"
                label="Student?"
                checked={EditMode}
                onChange={updateNames}
            />
            <Form.Check
                type="checkbox"
                id="is-happy-check"
                checked={EditMode}
                onChange={updateNames}
            />
            <div>
                {" "}
                {EditMode
                    ? userName + " is not a student"
                    : userName + " is a student"}
            </div>
        </div>
    );
}

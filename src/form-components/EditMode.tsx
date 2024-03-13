import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditable, setEditable] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditable(event: React.ChangeEvent<HTMLInputElement>) {
        setEditable(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editable-switch"
                label="Edit Mode"
                checked={isEditable}
                onChange={updateEditable}
            />

            {isEditable ? (
                <div>
                    <Form.Group controlId="formNameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={userName} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                </div>
            ) : (
                <div>
                    {userName} is
                    {isStudent ? " a student" : " not a student"}
                </div>
            )}
        </div>
    );
}

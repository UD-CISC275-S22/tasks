import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [usersName, setUsersName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUsersName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                label="change edit mode"
                type="switch"
                id="change edit mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode && (
                <Form.Check
                    label="change student status"
                    type="switch"
                    id="name and student status check"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            )}
            {editMode && (
                <Form.Group controlId="formUserName">
                    <Form.Label>Input Name</Form.Label>
                    <Form.Control
                        type="string"
                        value={usersName}
                        onChange={updateName}
                    />
                </Form.Group>
            )}
            {!editMode && (
                <div>
                    {usersName}
                    {isStudent ? " is a student" : " is not a student"}
                </div>
            )}
        </div>
    );
}

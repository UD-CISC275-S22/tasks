import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode && (
                <Form.Group controlId="userName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
            )}
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Are you a student?"
                    checked={isStudent}
                    onChange={(e) => setIsStudent(e.target.checked)}
                />
            )}
            {!editMode && isStudent && userName + " is a student"}
            {!editMode && !isStudent && userName + " is not a student"}
        </div>
    );
}

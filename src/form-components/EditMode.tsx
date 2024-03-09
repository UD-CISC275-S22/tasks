import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [student, IsStudent] = useState<boolean>(true);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        IsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editing"
                label="Edit"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ? (
                <div>
                    <Form.Group controlId="formMovieName">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateUsername}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Are you a student?"
                        checked={student}
                        onChange={updateIsStudent}
                    />
                </div>
            ) : (
                <div>
                    {userName} is {student ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}

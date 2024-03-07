import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ? (
                <>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={updateUserName}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Student"
                        checked={student}
                        onChange={updateStudent}
                    />
                </>
            ) : (
                <div>
                    {userName} is {student ? "a student." : "not a student."}
                </div>
            )}
        </div>
    );
}

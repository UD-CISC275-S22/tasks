import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [username, setUsername] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    //false means NOT edit mode
    const [mode, setMode] = useState<boolean>(false);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit"
                checked={mode}
                onChange={updateMode}
            />
            {mode ? (
                <div>
                    <Form.Group controlId="formEditMode">
                        <Form.Label>Change Name:</Form.Label>
                        <Form.Control
                            value={username}
                            onChange={updateUsername}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="edit-mode-check"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                </div>
            ) : (
                <div>
                    {username} is {student ? "a student" : "not a student"}.
                </div>
            )}
        </div>
    );
}

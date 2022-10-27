import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [username, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editMode"
                label="Edit Mode"
                checked={editMode}
                onChange={() => setMode(!editMode)}
            />
            {editMode ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={username}
                            onChange={updateUsername}
                        />
                    </Form.Group>
                    <Form.Check
                        id="Student"
                        type="checkbox"
                        label="student?"
                        checked={isStudent}
                        onChange={() => setStudent(!isStudent)}
                    />
                </div>
            ) : (
                <span>
                    {username} is {isStudent ? "" : "not"} a student
                </span>
            )}
        </div>
    );
}

import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label={isEditing ? "Editing" : "Not Editing"}
                    checked={isEditing}
                    onChange={() => setIsEditing(!isEditing)}
                />
            </Form.Group>
            {isEditing ? (
                <FormGroup>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is a student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                </FormGroup>
            ) : (
                <p>
                    {userName} {isStudent ? "is" : "is not"} a student.
                </p>
            )}
        </div>
    );
}

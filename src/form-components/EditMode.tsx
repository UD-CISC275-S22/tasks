import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [isEditing, setEditMode] = useState<boolean>(false);

    function updateMode(event: ChangeEvent) {
        setEditMode(event.target.checked);
    }

    function changeStudent(event: ChangeEvent) {
        setStudent(event.target.checked);
    }

    function editName(event: ChangeEvent) {
        setName(event.target.value);
    }

    return (
        <div>
            <div>
                <div>
                    <h3>Edit Mode</h3>
                    <Form.Check
                        type="switch"
                        id="is-switch-on"
                        label="Edit Mode?"
                        checked={isEditing}
                        onChange={updateMode}
                    />
                </div>
                <div>
                    {isEditing && (
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Student?"
                            checked={isStudent}
                            onChange={changeStudent}
                        />
                    )}
                </div>
                <div>
                    {isEditing && (
                        <Form.Group controlId="changeTextBox">
                            <Form.Label>Change Name:</Form.Label>
                            <Form.Control
                                type="string"
                                value={name}
                                onChange={editName}
                            />
                        </Form.Group>
                    )}
                </div>
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(!isStudent);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-switch"
                label={editMode ? "Edit Mode" : "View Mode"}
                checked={editMode}
                onChange={updateEditMode}
                inline
                data-testid="edit-mode-switch"
            />
            <Form.Group controlId="nameInput" hidden={!editMode}>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    placeholder="Your Name"
                    onChange={updateName}
                    data-testid="nameInput"
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId="isStudentCheckbox" hidden={!editMode}>
                <Form.Check
                    label="Is a student?"
                    type="checkbox"
                    id="is-student-checkbox"
                    checked={isStudent}
                    onChange={updateStudent}
                    inline
                    name="is-student-checkbox"
                    data-testid="is-student-checkbox"
                ></Form.Check>
            </Form.Group>

            <div hidden={editMode}>
                {name ? name : ""} is{isStudent ? " " : " not "}a student
            </div>
        </div>
    );
}

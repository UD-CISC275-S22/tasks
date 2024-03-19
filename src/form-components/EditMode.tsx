import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function inEditMode() {
        return (
            <div>
                <Form.Group controlId="formEnterName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
                <Form.Check
                    inline
                    type="checkbox"
                    id="student"
                    label="student"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            </div>
        );
    }
    function notInEditMode() {
        return (
            <div>
                {name} is {isStudent ? " a student" : " not a student"}
            </div>
        );
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>{editMode ? inEditMode() : notInEditMode()}</div>
            <Form.Check
                inline
                type="switch"
                label="Edit"
                checked={editMode}
                onChange={(e) => setEditMode(e.target.checked)}
            />
        </div>
    );
}

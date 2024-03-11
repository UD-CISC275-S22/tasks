import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleStudentChange = () => {
        setIsStudent(!isStudent);
    };
    return (
        <div>
            <div>Edit Mode</div>
            <Form.Group controlId="formAttempt">
                {editMode && (
                    <>
                        <Form.Label>New name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </>
                )}
                <Form.Check
                    type="switch"
                    id="is-edit-check"
                    label="Edit"
                    checked={editMode}
                    onChange={toggleEditMode}
                />
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student or not?"
                        checked={isStudent}
                        onChange={handleStudentChange}
                    />
                )}
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </div>
            </Form.Group>
        </div>
    );
}

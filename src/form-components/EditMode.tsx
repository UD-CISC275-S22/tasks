import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleIsStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? (
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formIsStudent">
                        <Form.Check
                            type="switch"
                            label="Student"
                            checked={isStudent}
                            onChange={handleIsStudentChange}
                        />
                    </Form.Group>
                </Form>
            ) : (
                <p>
                    {userName} is {isStudent ? "a" : "not a"} student
                </p>
            )}

            <Form.Switch
                id="edit-switch"
                label={`Switch to ${editMode ? "text" : "edit"} mode`}
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your name");
    const [isStudent, setIsStudent] = useState(true);

    const handleEditModeChange = () => {
        setEditMode(!editMode);
    };
    const handleStudentChange = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit Mode"
                checked={editMode}
                onChange={handleEditModeChange}
            />
            {editMode ? (
                <Form>
                    <Form.Group controlId="userName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(event) =>
                                setUserName(event.target.value)
                            }
                        />
                    </Form.Group>
                    <Form.Group controlId="isStudentCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </Form.Group>
                </Form>
            ) : (
                <div>
                    <h3>
                        {`${userName} is ${
                            isStudent ? "a student" : "not a student"
                        }`}
                    </h3>
                </div>
            )}
        </div>
    );
}

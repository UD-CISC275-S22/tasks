import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    // State
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            {/* Switch to toggle edit mode */}
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(e) => {
                    setEditMode(e.target.checked);
                }}
            />

            {/* If NOT in edit mode → show text */}
            {
                !editMode ?
                    <div>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </div>
                    // If in edit mode → show form
                :   <div>
                        <Form.Group controlId="edit-name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                value={name}
                                onFocus={(e) => {
                                    e.target.select();
                                }}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setName(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Check
                            type="checkbox"
                            id="student-checkbox"
                            label="Student?"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                    </div>

            }
        </div>
    );
}

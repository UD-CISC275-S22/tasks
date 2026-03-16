import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditMode(e.target.checked)
                }
            />
            {editMode ?
                <div>
                    <Form.Group controlId="formEditName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setIsStudent(e.target.checked)
                        }
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </div>
            }
        </div>
    );
}

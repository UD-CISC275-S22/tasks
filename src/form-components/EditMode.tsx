import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [userName, setUserName] = useState<string>("Your Name");
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Label>Switch Editing Mode:</Form.Label>
                <Form.Check
                    type="switch"
                    id="is-happy-check"
                    label={isEditing ? "Editing" : "Not Editing"}
                    checked={isEditing}
                    onChange={() => {
                        setIsEditing(!isEditing);
                    }}
                />
                <Form.Label>
                    {userName} {isStudent ? "is" : "is not"} a student
                </Form.Label>
                <Form.Control
                    value={userName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserName(event.target.value)
                    }
                />
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Change is a student:"
                    checked={isStudent}
                    onChange={() => setIsStudent(!isStudent)}
                />
            </Form.Group>
        </div>
    );
}

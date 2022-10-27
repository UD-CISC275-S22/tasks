import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [userName, setUserName] = useState<string>("Your name");
    const updateUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };
    return (
        <>
            <div>
                <h3>Edit Mode</h3>
            </div>
            <Form.Group
                style={{ width: 200, alignSelf: "center" }}
                controlId="forEditMode"
            >
                <Form.Label>Edit Mode:</Form.Label>
                <Form.Switch
                    type="switch"
                    id="edit-mode"
                    onChange={() => setEditing(!editing)}
                    checked={editing}
                />
            </Form.Group>
            {editing && (
                <Form.Group style={{ width: 200, alignSelf: "center" }}>
                    <Form.Label>Student Info</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={updateUserName}
                        placeholder={userName}
                    />
                    <Form.Check
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                        id="is-student"
                        label="Student"
                    />
                </Form.Group>
            )}
            <p>
                {userName} {isStudent ? "is" : "is not"} a student
            </p>
        </>
    );
}

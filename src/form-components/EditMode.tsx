import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [studentName, setStudentName] = useState<string>("Your name");

    const updateStudentName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudentName(event.target.value);
    };

    return (
        <>
            <div>
                <h3>Edit Mode</h3>
            </div>
            <Form.Group
                style={{ width: 100, alignSelf: "center" }}
                controlId="forEditMode"
            >
                <Form.Label>Edit Mode:</Form.Label>
                <Form.Switch
                    type="switch"
                    id="edit-mode"
                    onChange={() => setIsEditing(!isEditing)}
                    checked={isEditing}
                />
            </Form.Group>
            {isEditing && (
                <Form.Group style={{ width: 100, alignSelf: "center" }}>
                    <Form.Label>Student Info</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={updateStudentName}
                        placeholder={studentName}
                    />
                    <Form.Check
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                        id="is-student"
                        label="Student"
                        inline
                    />
                </Form.Group>
            )}
            <p>
                {studentName} {isStudent ? "is" : "is not"} a student
            </p>
        </>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [studentName, setStudentName] = useState<string>("Your name");
    const [editMode, setEditmode] = useState<boolean>(true);
    const [isStudent, SetIsStudent] = useState<boolean>(true);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditmode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        SetIsStudent(event.target.checked);
    }
    if (!editMode) {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="checkbox"
                    id="is-Student"
                    label="Are you a student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
                <Form.Check
                    inline
                    type="switch"
                    id="Edit-Mode"
                    checked={editMode}
                    onChange={() => setEditmode(editMode)}
                />
                <Form.Group controlId="formStudentName">
                    <Form.Label>Student:</Form.Label>
                    <Form.Control
                        type="textbox"
                        placeholder="Your Name"
                        value={studentName}
                        disabled={editMode}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudentName(event.target.value)}
                    />
                </Form.Group>
                <div>
                    {studentName} is {!isStudent ? "" : "not"} a student
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    inline
                    type="switch"
                    id="Edit-Mode"
                    checked={editMode}
                    onChange={updateMode}
                />
                <div>
                    {studentName} is {isStudent ? "" : "not"} a student
                </div>
            </div>
        );
    }
}

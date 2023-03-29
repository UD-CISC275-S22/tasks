import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [studentName, setStudentName] = useState<string>("Your Name");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing:"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                />
            </div>
            <div>
                {isEditMode ? (
                    <div>
                        <Form.Label> Name: </Form.Label>
                        <Form.Control
                            value={studentName}
                            onChange={updateName}
                        />
                        <Form.Check
                            type="switch"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setIsStudent(event.target.checked)}
                        />
                    </div>
                ) : (
                    <div>
                        {studentName + " "}
                        {isStudent ? "is a student" : "is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}

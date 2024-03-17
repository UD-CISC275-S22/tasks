import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsStudent(event.target.checked);
    }
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>): void {
        setUserName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-check"
                label="Edit"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ? (
                <div>
                    <Form.Group controlId="formStudentName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={userName}
                                onChange={updateUserName}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </div>
            )}
        </div>
    );
}

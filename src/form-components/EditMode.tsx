import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [student, setStudent] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(true);

    function newEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function newIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    if (!edit) {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    inline
                    type="checkbox"
                    id="isStudent"
                    label="Are you a Student?"
                    checked={isStudent}
                    onChange={newIsStudent}
                />
                <Form.Check
                    inline
                    type="switch"
                    id="editCheck"
                    label="Toggle Edit Mode"
                    checked={edit}
                    onChange={newEdit}
                />
                <Form.Group controlId="formStudentName">
                    <Form.Label>Student:</Form.Label>
                    <Form.Control
                        type="textbox"
                        placeholder="Your Name"
                        value={student}
                        disabled={edit}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.value)}
                    />
                </Form.Group>
                <div>
                    {student} is {!isStudent ? "a student" : "not a student"}
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
                    id="editCheck"
                    label="Toggle Edit Mode"
                    checked={edit}
                    onChange={newEdit}
                />
                <div>
                    {student} is {isStudent ? "a student" : "not a student"}
                </div>
            </div>
        );
    }
}

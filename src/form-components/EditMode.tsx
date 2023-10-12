import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateInEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-in-edit-mode"
                label="Edit Mode"
                checked={inEditMode}
                onChange={updateInEditMode}
            />
            {inEditMode ? (
                <div>
                    <div>
                        <Form.Group controlId="name">
                            <Form.Control
                                value={userName}
                                onChange={updateUserName}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="is_student-check"
                            label="Are you a Student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </div>
                </div>
            ) : null}
            <div>
                {isStudent === true
                    ? `${userName} is a student`
                    : `${userName} is not a student`}
            </div>
        </div>
    );
}

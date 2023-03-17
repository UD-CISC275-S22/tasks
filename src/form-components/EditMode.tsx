import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {!inEditMode && isStudent ? (
                    <span>{name} is a Student.</span>
                ) : !inEditMode && !isStudent ? (
                    <span>{name} is not a Student.</span>
                ) : (
                    <span></span>
                )}
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="in-edit-mode-switch"
                    label="Edit Mode"
                    checked={inEditMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setInEditMode(event.target.checked)
                    }
                />
            </div>
            <div>
                {inEditMode ? (
                    <Form.Group controlId="formName">
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                ) : (
                    <span></span>
                )}
            </div>
            <div>
                {inEditMode ? (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student Check"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setIsStudent(event.target.checked)}
                    />
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}

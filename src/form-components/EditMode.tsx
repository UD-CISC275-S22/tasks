import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="in-edit-mode-switch"
                    label="Edit?"
                    checked={isEditMode}
                    onChange={(e) => setEditMode(e.target.checked)}
                />
                {isEditMode ? (
                    <div>
                        <Form.Group controlId="formUserName" as={Row}>
                            <Form.Label column sm={2}>
                                Name:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formInSchool" as={Row}>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    id="in-edit-mode-check"
                                    label="Student?"
                                    checked={isStudent}
                                    onChange={(e) =>
                                        setIsStudent(e.target.checked)
                                    }
                                />
                            </Col>
                        </Form.Group>
                    </div>
                ) : (
                    <div>
                        {name} {isStudent ? "is a student" : "is not a student"}
                        .
                    </div>
                )}
            </div>
        </div>
    );
}

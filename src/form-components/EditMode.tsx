import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "x-large" }}>Edit Mode</div>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode On/Off"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode === true ? (
                <Form.Group controlId="change-name" as={Row}>
                    <Form.Label column sm={2} style={{ textAlign: "center" }}>
                        Enter Name:{" "}
                    </Form.Label>{" "}
                    <Col md="auto"></Col>
                    <Col>
                        <Form.Control
                            value={userName}
                            style={{
                                maxWidth: "200px",
                                textAlignLast: "center"
                            }}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setUserName(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            ) : (
                ""
            )}
            <div>
                {editMode === true ? (
                    <Form.Check
                        type="checkbox"
                        id="change-student-type"
                        label="Set Student"
                        checked={isStudent}
                        onChange={updateIsStudent}
                        style={{ textAlign: "center" }}
                    />
                ) : (
                    ""
                )}
            </div>
            <div>
                {editMode === false && userName !== ""
                    ? isStudent === true
                        ? userName + " is a Student"
                        : userName + " is not a Student"
                    : ""}
            </div>
        </div>
    );
}

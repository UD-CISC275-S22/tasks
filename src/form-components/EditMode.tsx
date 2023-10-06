import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [studentStatus, setStudentStatus] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentStatus(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-mode-changeable"
                label="Change to edit mode?"
                checked={mode}
                onChange={updateMode}
            />
            {!mode ? (
                <div></div>
            ) : (
                <div>
                    <Form.Group controlId="editName">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={updateName}
                            disabled={!mode}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="can-change-studentStatus"
                        label="Are you a student?"
                        checked={studentStatus}
                        onChange={updateStudentStatus}
                        disabled={!mode}
                    />
                </div>
            )}
            {studentStatus ? (
                <div>{name} is a student</div>
            ) : (
                <div>{name} is not a student</div>
            )}
        </div>
    );
}

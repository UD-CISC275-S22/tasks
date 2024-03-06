import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [student, editStudent] = useState<string>("Your Name");
    const [mode, setMode] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(true);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(!mode);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        editStudent(event.target.value);
    }
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(!status);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit"
                label="Edit Mode"
                checked={mode}
                onChange={updateMode}
                style={{ marginLeft: "700px", marginRight: "650px" }}
            />
            {!mode ? (
                <div>
                    {status === true ? (
                        <div>{student} is a student</div>
                    ) : (
                        <div>{student} is not a student</div>
                    )}
                </div>
            ) : (
                <>
                    <Form.Group controlId="formChangeName">
                        <Form.Label>Change Name:</Form.Label>
                        <Form.Control value={student} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-StudentCheck"
                        label="Are you a student?"
                        name="student"
                        checked={status}
                        onChange={updateStatus}
                    />
                </>
            )}
        </div>
    );
}

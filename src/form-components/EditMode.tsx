import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [student, editStudent] = useState<string>("Your Name");
    const [mode, setMode] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(true);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        editStudent(event.target.value);
    }
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <span>
                {student} is {status === true ? "a student" : "not a student"}
            </span>
            <Form.Switch
                type="checkbox"
                id="isStudentCheck"
                label="Edit Mode"
                checked={mode}
                onChange={updateMode}
                style={{ marginLeft: "700px", marginRight: "650px" }}
            />
            {mode && (
                <>
                    <Form.Group controlId="formChangeName">
                        <Form.Label>Change Name:</Form.Label>
                        <Form.Control value={student} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="isStudentCheck"
                        label="student"
                        checked={status}
                        onChange={updateStatus}
                    />
                </>
            )}
        </div>
    );
}

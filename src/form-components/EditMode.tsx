import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    function editName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [edit, setEdit] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                checked={edit}
                type="switch"
                id="check-edit"
                label="Check to edit!"
                onChange={() => setEdit(!edit)}
            />
            {edit ? (
                <Form.Check
                    checked={student}
                    type="checkbox"
                    id="check-student"
                    label="Student?"
                    onChange={() => setStudent(!student)}
                />
            ) : (
                <></>
            )}

            <div>{"\n"}</div>
            {edit ? (
                <Form.Group controlId="formEnterName">
                    <Form.Label>Enter Name of Student</Form.Label>
                    <Form.Control value={name} onChange={editName} />
                </Form.Group>
            ) : (
                <></>
            )}
            <p>
                {name} is {student ? "" : "not"} a Student
            </p>
        </div>
    );
}

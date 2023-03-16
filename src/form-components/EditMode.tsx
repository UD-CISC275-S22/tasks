import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="is-edit-check"
                label="Edit?"
                checked={edit}
                onChange={() => setEdit(!edit)}
            />
            {edit ? (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={student}
                    onChange={() => setStudent(!student)}
                />
            ) : (
                <></>
            )}

            <div>{"\n"}</div>
            {edit ? (
                <Form.Group controlId="formEnterName">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            ) : (
                <></>
            )}
            <p>
                {name} is {!student ? "not" : ""} a Student
            </p>
        </div>
    );
}

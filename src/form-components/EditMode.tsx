import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
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
                label="Click to edit!"
                id="check-edit"
                onChange={() => setEdit(!edit)}
            />
            {edit ? (
                <Form.Check
                    checked={student}
                    type="checkbox"
                    label="Is this a Student?"
                    id="check-student"
                    onChange={() => setStudent(!student)}
                />
            ) : (
                <></>
            )}

            {edit ? (
                <Form.Group>
                    <Form.Label>Enter Name of Student</Form.Label>
                    <Form.Control value={name} onChange={changeName} />
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

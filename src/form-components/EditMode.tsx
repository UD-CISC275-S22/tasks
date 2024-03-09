import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState(true);
    const [name, setName] = useState("Your Name");
    const [student, setStudent] = useState(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateStudent() {
        setStudent((prevStudent) => !prevStudent);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check type="switch" checked={edit} onChange={updateEdit} />
            <Form.Check
                type="checkbox"
                checked={student}
                onChange={updateStudent}
                disabled={!edit}
            ></Form.Check>
            <input
                value={name}
                onChange={updateName}
                disabled={edit === false}
            />
            <h2>
                {name} is {student ? "a student" : "not a student"}
            </h2>
        </div>
    );
}

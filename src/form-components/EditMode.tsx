import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("Your Name");
    const [student, setStudent] = useState(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-edit"
                label="Edit Mode"
                checked={edit}
                onChange={updateEdit}
            />
            {edit && (
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            id="name"
                            onChange={updateName}
                            value={name}
                        />
                    </label>
                    <label>
                        Is Student?
                        <input
                            type="checkbox"
                            id="student?"
                            checked={student}
                            onChange={updateStudent}
                        />
                    </label>
                </form>
            )}
            {!edit ? (
                <>
                    {name} is {student ? "" : "not"} a student{" "}
                </>
            ) : null}
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEdit, setInEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function isEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setInEdit(event.target.checked);
    }

    function newName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function setStudent() {
        setIsStudent(!isStudent);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="in-edit"
                label="in edit mode?"
                checked={inEdit}
                onChange={isEdit}
            ></Form.Check>
            {!inEdit ? (
                isStudent ? (
                    name + " is a student"
                ) : (
                    name + " is not a student"
                )
            ) : (
                <div>
                    <Form.Group controlId="Change name">
                        <Form.Label>student</Form.Label>
                        <Form.Control value={name} onChange={newName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="student"
                        checked={isStudent == true}
                        onChange={setStudent}
                        aria-label="student"
                    ></Form.Check>
                </div>
            )}
        </div>
    );
}

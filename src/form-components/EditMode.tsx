import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editmode, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    
    function activateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function checkStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="edit switch"
                    label="Edit mode"
                    checked={editmode}
                    onChange={activateEdit}
                />
                {editmode &&<div>
                <Form.Group controlId="name">
                    <Form.Label>Your Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
                <Form.Check
                    type="checkbox"
                    id="student check"
                    label="student?"
                    checked={isStudent}
                    onChange={checkStudent}
                />
                </div>
                }
            </div>
            {name} is {!isStudent ? "not" : null} a student
        </div>
    );
}

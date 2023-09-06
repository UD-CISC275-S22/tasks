import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isDefault, setDefault] = useState<string>("Your Name ");
    const [isStudent, setStudent] = useState<string>(" is a student");
    const [isEdit, setEdit] = useState<boolean>(false);
    function updateCheck() {
        setEdit(!isEdit);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            setStudent(" is a student");
        } else {
            setStudent(" is not a student");
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editMode"
                inline
                label="Edit Mode"
                checked={isEdit}
                onChange={updateCheck}
            />
            {isEdit && (
                <Form.Check
                    type="checkbox"
                    inline
                    id="student"
                    onChange={updateStudent}
                    label="student?"
                    checked={isStudent === " is a student"}
                />
            )}
            {isEdit && (
                <Form.Group controlId="textbox">
                    <Form.Label>Enter Name:</Form.Label>
                    <Form.Control
                        disabled={!isEdit}
                        hidden={!isEdit}
                        value={isDefault}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setDefault(event.target.value)}
                    />
                </Form.Group>
            )}
            <div>
                {isDefault}
                {isStudent}
            </div>
        </div>
    );
}

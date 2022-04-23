import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [canEdit, setCanEdit] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    inline
                    type="switch"
                    id="edit-mode"
                    label="Editing"
                    checked={canEdit}
                    onChange={() => {
                        setCanEdit(!canEdit);
                    }}
                />
            </div>
            <div>
                {canEdit ? (
                    <>
                        <Form.Check
                            inline
                            type="switch"
                            id="is-student"
                            label="Is this a student?"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                        <Form.Group controlId="formPersonName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                    </>
                ) : (
                    <div>
                        {name}{" "}
                        {isStudent ? " is a student" : " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}

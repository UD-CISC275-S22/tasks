import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    function updateStudent(event: ChangeEvent) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing:"
                    checked={isEdit}
                    onChange={() => setIsEdit(!isEdit)}
                />
            </div>
            <div>
                {isEdit ? (
                    <Form.Group controlId="FormPersonName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event: ChangeEvent) =>
                                setName(event.target.value)
                            }
                        />
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Are you student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </Form.Group>
                ) : (
                    <div>
                        {name} is {isStudent ? "a student." : "not a student."}
                    </div>
                )}
            </div>
        </div>
    );
}

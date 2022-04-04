import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, SetisStudent] = useState<boolean>(true);
    const [isEdit, setisEdit] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing"
                    checked={isEdit}
                    onChange={() => setisEdit(!isEdit)}
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
                            id="isStudent"
                            label="is Student?"
                            checked={isStudent}
                            onChange={(event: ChangeEvent) =>
                                SetisStudent(event.target.checked)
                            }
                        />
                    </Form.Group>
                ) : (
                    <div>
                        {name} is
                        {isStudent ? " a student." : " not a student."}
                    </div>
                )}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    type updated = React.ChangeEvent<HTMLInputElement>;

    function updateUserName(event: updated) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            ></Form.Check>
            {editMode ? (
                <div>
                    <Form.Group controlId="form name">
                        <Form.Label>Enter Name: </Form.Label>
                        <Form.Control
                            value={name}
                            onChange={updateUserName}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="studentCheck"
                        label="Student Status"
                        checked={student}
                        onChange={() => setStudent(!student)}
                    ></Form.Check>
                </div>
            ) : (
                <span>
                    {name} {student ? " is a student." : " is not a student."}
                </span>
            )}
        </div>
    );
}

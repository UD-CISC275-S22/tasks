import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
    const [editState, setEditState] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [checkstudent, setcheckstudent] = useState<boolean>(true);
    function updatecheckstudent(event: ChangeEvent) {
        setcheckstudent(event.target.checked);
    }
    function updateEditState(event: ChangeEvent) {
        setEditState(event.target.checked);
    }
    function updateName(event: ChangeEvent) {
        setUserName(event.target.value);
    }
    return (
        <div>
            <div>
                <div>
                    <h3>Edit Mode</h3>
                    <Form.Check
                        type="switch"
                        id="is-switch-on"
                        label="Edit Mode?"
                        checked={editState}
                        onChange={updateEditState}
                    />
                </div>
                <div>
                    {editState && (
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Student?"
                            checked={checkstudent}
                            onChange={updatecheckstudent}
                        />
                    )}
                </div>
                <div>
                    {editState && (
                        <Form.Group controlId="changeTextBox">
                            <Form.Label>Change Name:</Form.Label>
                            <Form.Control
                                type="string"
                                value={userName}
                                onChange={updateName}
                            />
                        </Form.Group>
                    )}
                </div>
                <div>
                    {userName} {checkstudent ? "is" : "is not"}
                    {" a student"}
                </div>
            </div>
        </div>
    );
}

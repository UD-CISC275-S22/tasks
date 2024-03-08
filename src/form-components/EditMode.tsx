import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    function checkAndText(): JSX.Element {
        return (
            <div>
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="Are you a student?"
                    checked={student}
                    onChange={updateStatus}
                    disabled={!editMode}
                />

                <Form.Group controlId="insertUsername">
                    <Form.Label>What is your name?:</Form.Label>
                    <Form.Control
                        type="textbox"
                        value={username}
                        onChange={updateUsername}
                        disabled={!editMode}
                    />
                </Form.Group>
            </div>
        );
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="is-in-edit-mode-check"
                label="Edit Mode?"
                checked={editMode}
                onChange={updateMode}
            />
            {/* {edit === true} ? **code**: edit=== false ? **code** : edit === some ? **code** : none*/}
            {editMode === true ? (
                checkAndText()
            ) : (
                <span> Not in edit mode</span>
            )}
            {username} is {student ? "a student" : "not a student"}
        </div>
    );
}

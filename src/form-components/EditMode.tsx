import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [enrolled, setEnrolled] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateEnrolled(event: React.ChangeEvent<HTMLInputElement>) {
        setEnrolled(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <div>
                {enrolled ? (
                    <span>{name} is a student </span>
                ) : (
                    <span> {name} is not a student </span>
                )}
            </div>
            <div>
                <Form.Group controlId="formInputAnswer">
                    <div>
                        <Form.Check
                            type="switch"
                            id="edit-mode-check"
                            label="Edit Mode"
                            checked={editMode}
                            onChange={updateEditMode}
                        />
                    </div>
                    {editMode && (
                        <div>
                            <div>
                                <Form.Control
                                    value={name}
                                    onChange={updateName}
                                    disabled={!editMode}
                                />
                            </div>

                            <Form.Check
                                type="switch"
                                id="is-student-check"
                                label="Is Student?"
                                checked={enrolled}
                                onChange={updateEnrolled}
                                disabled={!editMode}
                                hidden={!editMode}
                            />
                        </div>
                    )}
                </Form.Group>
            </div>
        </div>
    );
}

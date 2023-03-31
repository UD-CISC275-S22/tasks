import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    // State
    const [name, setName] = useState<string>("Your name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    // Control
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    //View
    return (
        <div>
            <h1>Edit Mode</h1>
            <div>
                {isStudent ? (
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
                                checked={isStudent}
                                onChange={updateIsStudent}
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

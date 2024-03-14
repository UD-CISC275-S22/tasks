import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    //fn to switch setEditMode
    const toggleEditMode = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditMode(event.target.checked);
    };

    //fn to control change name
    const updateNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    //fn to check isStudent switch
    const updateStundet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(event.target.checked);
    };

    return (
        <>
            <div>
                <h3>Edit Mode</h3>
                {editMode ? (
                    //edit true mode view
                    <>
                        <div>
                            <label>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="name"
                                        placeholder="Your Name"
                                        onChange={updateNameChange}
                                    />
                                </Form.Group>
                            </label>
                            <br />
                            <label>
                                <Form.Check
                                    type="checkbox"
                                    label="Are you a student?"
                                    checked={isStudent}
                                    onChange={updateStundet}
                                />
                            </label>
                        </div>
                    </>
                ) : (
                    //default editMode(false) view
                    <>
                        <p>
                            {name} is{" "}
                            {isStudent ? "a student" : "not a student"}
                        </p>
                    </>
                )}
                {/* updateStundet */}
                <label>
                    <Form.Check
                        type="switch"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={toggleEditMode}
                    />
                </label>
            </div>
        </>
    );
}

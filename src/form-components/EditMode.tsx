import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const handleSwitchChange = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={handleSwitchChange}
            />

            {!editMode ? (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </div>
            ) : (
                <div>
                    <label>
                        User Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        Student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </label>
                </div>
            )}
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {!editMode ? (
                    <p>
                        {userName} is{" "}
                        {isStudent ? "a student" : "not a student"}
                    </p>
                ) : (
                    <div>
                        <label htmlFor="nameInput">Name:</label>
                        <input
                            id="nameInput"
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                        {/* Check if editMode is true before rendering the checkbox */}
                        {editMode && (
                            <Form.Check
                                id="studentCheckbox"
                                type="checkbox"
                                label="Student"
                                checked={isStudent}
                                onChange={handleStudentChange}
                            />
                        )}
                    </div>
                )}
                <button onClick={toggleEditMode}>
                    {editMode ? "Save" : "Edit"}
                </button>
            </div>
        </div>
    );
}

import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                <input
                    type="checkbox"
                    id="edit-switch"
                    checked={isEditMode}
                    onChange={toggleEditMode}
                    role="checkbox"
                />
                <label htmlFor="edit-switch">Edit Mode</label>
            </div>

            {isEditMode ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            role="textbox"
                        />
                    </label>
                    <div>
                        <input
                            type="checkbox"
                            id="student-checkbox"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                            role="checkbox"
                            name="student"
                        />
                        <label htmlFor="student-checkbox">Student</label>
                    </div>
                </div>
            ) : (
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </div>
            )}
        </div>
    );
}

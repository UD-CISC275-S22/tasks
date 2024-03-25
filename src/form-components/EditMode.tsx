import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => {
        setEditMode((prevEditMode) => !prevEditMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const toggleStudentStatus = () => {
        setIsStudent((prevIsStudent) => !prevIsStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                <input
                    type="checkbox"
                    checked={editMode}
                    onChange={toggleEditMode}
                />
                <label>Switch to Edit Mode</label>
            </div>
            {editMode ? (
                <>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={toggleStudentStatus}
                        />
                        Student
                    </label>
                </>
            ) : (
                <p>
                    {userName} {isStudent ? "is a student" : "is not a student"}
                </p>
            )}
        </div>
    );
}

import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const toggleEditMode = () => {
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
                        <label htmlFor="studentCheckbox">Student:</label>
                        <input
                            id="studentCheckbox"
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </div>
                )}
                <button onClick={toggleEditMode}>
                    {editMode ? "Save" : "Edit"}
                </button>
            </div>
        </div>
    );
}

export default EditMode;

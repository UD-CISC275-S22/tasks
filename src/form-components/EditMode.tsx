import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {editMode ? (
                    <div>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={() => setIsStudent(!isStudent)}
                            />
                            Student
                        </label>
                    </div>
                ) : (
                    <p>
                        {userName} is {isStudent ? "a" : "not a"} student.
                    </p>
                )}
                <label>
                    <input
                        type="checkbox"
                        checked={editMode}
                        onChange={() => setEditMode(!editMode)}
                    />
                    Edit Mode
                </label>
            </div>
        </div>
    );
}

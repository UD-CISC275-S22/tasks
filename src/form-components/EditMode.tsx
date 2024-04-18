import React, { useState } from "react";

export function EditMode(): JSX.Element {
    // State to handle the component being in "edit mode"
    const [editMode, setEditMode] = useState(false);
    // State for the user's name
    const [name, setName] = useState("Your Name");
    // State to handle whether the user is a student
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                {" "}
                <input
                    type="checkbox"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            </div>
            {editMode ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Is a student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                    </label>
                </div>
            ) : (
                <p>{`${name} is ${isStudent ? "" : "not "}a student`}</p>
            )}
        </div>
    );
}

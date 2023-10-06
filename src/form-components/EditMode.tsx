import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const handleToggleEditMode = () => {
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
            <Switch checked={editMode} onChange={handleToggleEditMode} />
            {editMode ? (
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                        placeholder="Enter your name"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                        Student
                    </label>
                </div>
            ) : (
                <div>
                    <p>
                        {userName} is{" "}
                        {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            )}
        </div>
    );
}

function Switch(props: {
    checked: boolean;
    onChange: () => void;
}): JSX.Element {
    return (
        <label className="form-switch">
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            <span className="slider round"></span>
        </label>
    );
}

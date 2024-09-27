import React, { useState } from "react";
import { Form } from "react-bootstrap"; // Assuming Bootstrap for the switch

export function EditMode(): React.JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false); // Tracks whether we're in edit mode
    const [name, setName] = useState<string>("Your Name"); // Tracks the user's name
    const [isStudent, setIsStudent] = useState<boolean>(true); // Tracks if the user is a student

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Toggle Edit Mode"
                checked={isEditing}
                onChange={() => {
                    setIsEditing(!isEditing);
                }} // Toggle edit mode
            />

            {
                isEditing ?
                    // Edit mode: Form for editing the name and student status
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} // Update name as user types
                            placeholder="Enter your name"
                        />
                        <Form.Check
                            type="checkbox"
                            id="student-checkbox"
                            label="I am a student"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }} // Toggle student status
                        />
                    </div>
                    // View mode: Displaying the name and student status
                :   <div>
                        <p>
                            {name}{" "}
                            {isStudent ? "is a student" : "is not a student"}
                        </p>
                    </div>

            }
        </div>
    );
}

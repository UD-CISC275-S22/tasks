/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Class } from "../interfaces/class";

function EditCourse({
    course,
    onEditFormSubmit
}: {
    course: Class;
    onEditFormSubmit: (updatedCourse: Class) => void;
}) {
    const [editedCourse, setEditedCourse] = useState<Class>(course);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setEditedCourse((prevCourse) => ({
            ...prevCourse,
            [name]: name === "credits" ? parseFloat(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit the edited course info
        onEditFormSubmit(editedCourse);
    };

    return (
        <div>
            <h3>Edit Course</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Course Title:
                    <input
                        type="text"
                        name="courseTitle"
                        value={editedCourse.courseTitle}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Course Code:
                    <input
                        type="text"
                        name="courseCode"
                        value={editedCourse.courseCode}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Credits:
                    <input
                        type="number"
                        name="credits"
                        value={editedCourse.credits.toString()}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditCourse;

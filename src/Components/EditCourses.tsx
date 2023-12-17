/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Class } from "../interfaces/class";
import { Button } from "react-bootstrap";

function EditCourse({
    course,
    onEditFormSubmit,
    changeSemester
}: {
    course: Class;
    onEditFormSubmit: (OGcourseCode: string, updatedCourse: Class) => void;
    changeSemester: (updatedCourse: Class) => void;
}) {
    const [editedCourse, setEditedCourse] = useState<Class>(course);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [breadth, setBreadth] = useState<string>(course.breadth);
    //const [changeSem, setChangeSem] = useState<string>(course.semester);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setEditedCourse((prevCourse) => ({
            ...prevCourse,
            [name]: name === "credits" ? parseFloat(value) : value,
            breadth: breadth
            //semester: "Test"
            //semester: changeSem
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit the edited course info
        setIsVisible(false);
        setBreadth(breadth);
        onEditFormSubmit(course.courseCode, editedCourse);
        changeSemester(editedCourse);
        console.log(course);
        console.log(editedCourse);
    };

    return (
        <div>
            {/* <h3>Edit Course</h3> */}
            <Button onClick={() => setIsVisible(!isVisible)}>Edit</Button>
            <form
                style={{ display: isVisible ? "inline-block" : "none" }}
                onSubmit={handleSubmit}
            >
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
                <label>
                    Change Semester:
                    <input
                        type="text"
                        name="semester"
                        value={editedCourse.semester}
                        onChange={handleInputChange}
                    />
                </label>
                <div className="form-group">
                    <label htmlFor="breadth">Breadth: </label>
                    <select
                        id="breadth"
                        name="breadth"
                        value={breadth}
                        onChange={handleInputChange}
                    >
                        <option value="null">None</option>
                        <option value="HIST">
                            History and Cultural Change
                        </option>
                        <option value="SOCI">
                            Social and Behavioral Sciences
                        </option>
                        <option value="TECH">
                            Mathematics, Natural Sciences, and Technology
                        </option>
                        <option value="ARTS">
                            Creative Arts and Humanities
                        </option>
                    </select>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditCourse;

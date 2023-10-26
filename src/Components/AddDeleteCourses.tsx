/* eslint-disable prettier/prettier */
import React, { useState, ChangeEvent, FC } from "react";
import { Class } from "../interfaces/class";

export const CourseForm: React.FC<{}> = () => {
    const [courseInfo, setCourseInfo] = useState<Class>({
        courseTitle: "",
        courseCode: "",
        numPreReqs: 0,
        preReqs: [],
        credits: 0,
        canEditCredits: true,
        semester: "Fall",
        year: "Freshman",
        taken: true,
        note: ""
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        // Update courseInfo based on what is submitted
        setCourseInfo((prevCourseInfo) => ({
            ...prevCourseInfo,
            [name]: name === "credits" ? parseFloat(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submission Logic. Where does it go?
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Course Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={courseInfo.courseTitle}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="courseCode">Course Code:</label>
                <input
                    type="text"
                    id="courseCode"
                    name="courseCode"
                    value={courseInfo.courseCode}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="preReq">Pre Requisite:</label>
                <input
                    type="text"
                    id="preReq"
                    name="preReq"
                    value={courseInfo.preReqs.join(", ")}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="credits">Credits:</label>
                <input
                    type="number"
                    id="credits"
                    name="credits"
                    value={courseInfo.credits.toString()}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="semester">Semester:</label>
                <select
                    id="semester"
                    name="semester"
                    value={courseInfo.semester}
                    onChange={handleInputChange}
                >
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
            </div>
            <div>
                <label htmlFor="year">Year:</label>
                <select
                    id="year"
                    name="year"
                    value={courseInfo.year}
                    onChange={handleInputChange}
                >
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

function AddDeleteCourses(): JSX.Element {
    return (
        <div>
            <CourseForm></CourseForm>
        </div>
    );
}

export default AddDeleteCourses;

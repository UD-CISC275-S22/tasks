import React, { useState } from "react";
import { Class } from "../interfaces/class";

export const CourseForm: React.FC<{ courses: unknown }> = () => {
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
            <div className="form-group">
                <h3>Full Form</h3>
                <label htmlFor="title">Course Title: </label>
                <input
                    type="text"
                    id="title"
                    name="courseTitle"
                    value={courseInfo.courseTitle}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="courseCode">Course Code: </label>
                <input
                    type="text"
                    id="courseCode"
                    name="courseCode"
                    value={courseInfo.courseCode}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="preReq">Pre Requisite: </label>
                <input
                    type="text"
                    id="preReq"
                    name="preReqs"
                    value={courseInfo.preReqs.join(", ")}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="credits">Credits: </label>
                <input
                    type="number"
                    id="credits"
                    name="credits"
                    value={courseInfo.credits.toString()}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
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

            <div className="form-group">
                <label htmlFor="year">Year:</label>
                <input
                    id="year"
                    name="year"
                    value={courseInfo.year}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

function AddDeleteCourses(): JSX.Element {
    return (
        <div>
            <CourseForm courses={undefined}></CourseForm>
        </div>
    );
}

export default AddDeleteCourses;

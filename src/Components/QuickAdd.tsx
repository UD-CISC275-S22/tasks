/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Class } from "../interfaces/class";

import allClasses from "../data/allClasses.json";

//Quick Course Search and Add to Semester

function CourseSearch(): JSX.Element {
    const [courseCode, setCourseCode] = useState("");
    const [courseInfo, setCourseInfo] = useState<Class | null>(null);
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");

    const [courseFound, setCourseFound] = useState(true);

    const handleCourseCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourseCode(e.target.value);
    };

    const handleCourseSearch = () => {
        const foundCourse = allClasses.find(
            (course: Class) => course.courseCode === courseCode.toUpperCase()
        );

        if (foundCourse) {
            const newCourse: Class & { semester: string; year: string } = {
                ...foundCourse,
                semester: "",
                year: ""
            };
            setCourseInfo(newCourse);
            setCourseFound(true);
        } else {
            setCourseInfo(null); //Course not found, must use full form
            setCourseFound(false);
        }
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    };

    const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSemester(e.target.value);
    };

    const handleAddCourse = () => {
        //Figure out tomorrow
    };

    return (
        <div>
            <h3>Quick Search</h3>
            <label htmlFor="courseCode">Course Code: </label>
            <input
                type="text"
                id="courseCode"
                name="courseCode"
                value={courseCode}
                onChange={handleCourseCodeChange}
            />
            <button onClick={handleCourseSearch}>Search</button>

            {courseInfo ? (
                <div>
                    <h1>Course Information</h1>
                    <h6>{courseInfo.courseTitle}</h6>
                    <div>{courseInfo.courseCode}</div>
                    <div>{courseInfo.credits} Credits</div>
                    <br></br>
                    {year === "" || semester === "" ? (
                        <div>
                            <label htmlFor="year">Year: </label>
                            <input
                                type="text"
                                id="year"
                                name="year"
                                value={year}
                                onChange={handleYearChange}
                            />
                            <br></br>
                            <label htmlFor="semester">Semester: </label>
                            <select
                                id="semester"
                                name="semester"
                                value={semester}
                                onChange={handleSemesterChange}
                            >
                                <option value="Fall">Fall</option>
                                <option value="Winter">Winter</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                            </select>
                            <br></br>
                            <button onClick={handleAddCourse}>
                                Add Course
                            </button>
                            <br></br>
                            <br></br>
                        </div>
                    ) : null}
                </div>
            ) : courseFound === false ? (
                <p>No Course Found. Please Try Again or Use The Form</p>
            ) : null}
        </div>
    );
}

export default CourseSearch;

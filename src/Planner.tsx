/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./Planner.css";

interface Course {
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
}

interface Semester {
    id: string;
    season: string;
    year: string;
    course: Course[];
    skip: boolean;
}

interface Plan {
    id: string;
    title: string;
    semesters: Semester[];
}

interface Planner {
    plan: Plan;
}

const Planner: React.FC<Planner> = ({ plan }) => {
    const [semestersData, setSemestersData] = useState(plan.semesters);

    const handleSkipToggle = (index: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].skip = !updatedSemesters[index].skip;
        setSemestersData(updatedSemesters);
    };

    const handleClearCourses = (index: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].course = [];
        setSemestersData(updatedSemesters);
    };

    const handleInsertCourse = (index: number, newCourse: Course) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].course.push(newCourse);
        setSemestersData(updatedSemesters);
    };

    const handleRemoveCourse = (index: number, courseIndex: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].course.splice(courseIndex, 1);
        setSemestersData(updatedSemesters);
    };

    return (
        <div className="semester-courses">
            {plan.semesters.map((semester, semesterIndex) => (
                <div key={semesterIndex}>
                    {semester.skip ? (
                        <h2>{semester.id}(Skipped)</h2>
                    ) : (
                        <h2>{semester.id}</h2>
                    )}
                    <button onClick={() => handleSkipToggle(semesterIndex)}>
                        {semester.skip ? "Unskip" : "Skip"}
                    </button>
                    <button onClick={() => handleClearCourses(semesterIndex)}>
                        Clear Courses in Semester
                    </button>
                    <button
                        onClick={() =>
                            handleInsertCourse(semesterIndex, {
                                code: "NEWCOURSE Code",
                                name: "New Course",
                                descr: "New Descr",
                                credits: "3",
                                preReq: "New PreReq",
                                restrict: "New Restrict",
                                breadth: "New Breadth",
                                typ: "New Typ"
                            })
                        }
                    >
                        Insert New Course
                    </button>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                                <th>Description</th>
                                <th>Prerequisites</th>
                                <th>Restrictions</th>
                                <th>Breadth</th>
                                <th>Typically Offered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {semester.course.map((course, courseIndex) => (
                                <tr key={courseIndex}>
                                    <td>{course.code}</td>
                                    <td>{course.name}</td>
                                    <td>{course.credits}</td>
                                    <td>{course.descr}</td>
                                    <td>{course.preReq}</td>
                                    <td>{course.restrict}</td>
                                    <td>{course.breadth}</td>
                                    <td>{course.typ}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleRemoveCourse(
                                                    semesterIndex,
                                                    courseIndex
                                                )
                                            }
                                        >
                                            Remove Course
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export { Planner };

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
    courses: Course[];
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
        updatedSemesters[index].courses = [];
        setSemestersData(updatedSemesters);
    };

    const handleInsertCourse = (index: number, newCourse: Course) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].courses.push(newCourse);
        setSemestersData(updatedSemesters);
    };

    const handleRemoveCourse = (index: number, courseIndex: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].courses.splice(courseIndex, 1);
        setSemestersData(updatedSemesters);
    };
    const handleEditCourse = (
        semesterIndex: number,
        courseIndex: number,
        updatedCourse: Course
    ) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[semesterIndex].courses[courseIndex] = updatedCourse;
        setSemestersData(updatedSemesters);
    };
    const handleInsertSemester = () => {
        const newSemester: Semester = {
            id: `Semester ${semestersData.length + 1}`,
            season: "Fall",
            year: "2023",
            courses: [],
            skip: false
        };

        setSemestersData(prevSemesters => [...prevSemesters, newSemester]);
    };

    const handleRemoveSemester = (index: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters.splice(index, 1);
        setSemestersData(updatedSemesters);
    };
    const handleClearAllSemesters = () => {
        setSemestersData([]);
    };
    return (
        <div className="semester-courses">
            <button onClick={handleInsertSemester}>Insert New Semester</button>
            <button onClick={handleClearAllSemesters}>
                Clear All Semesters
            </button>
            {semestersData.map((semester, semesterIndex) => (
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
                    <button onClick={() => handleRemoveSemester(semesterIndex)}>
                        Remove Semester
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
                            {semester.courses.map((course, courseIndex) => (
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
                                                handleEditCourse(
                                                    semesterIndex,
                                                    courseIndex,
                                                    {
                                                        code:
                                                            prompt(
                                                                "Enter new code",
                                                                course.code
                                                            ) || course.code,
                                                        name:
                                                            prompt(
                                                                "Enter new name",
                                                                course.name
                                                            ) || course.name,
                                                        descr:
                                                            prompt(
                                                                "Enter new description",
                                                                course.descr
                                                            ) || course.descr,
                                                        credits:
                                                            prompt(
                                                                "Enter new credits",
                                                                course.credits
                                                            ) || course.credits,
                                                        preReq:
                                                            prompt(
                                                                "Enter new prerequisites",
                                                                course.preReq
                                                            ) || course.preReq,
                                                        restrict:
                                                            prompt(
                                                                "Enter new restrictions",
                                                                course.restrict
                                                            ) ||
                                                            course.restrict,
                                                        breadth:
                                                            prompt(
                                                                "Enter new breadth",
                                                                course.breadth
                                                            ) || course.breadth,
                                                        typ:
                                                            prompt(
                                                                "Enter new typically offered",
                                                                course.typ
                                                            ) || course.typ
                                                    }
                                                )
                                            }
                                        >
                                            Edit Course
                                        </button>
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

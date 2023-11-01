/* eslint-disable no-extra-parens */
import React from "react";
import "./SemesterCourses.css";

interface Course {
    code: string;
    name: string;
    credits: number;
}

interface Semester {
    name: string;
    courses: Course[];
    skip: boolean;
}

interface SemesterCoursesProps {
    semesters: Semester[];
}

const SemesterCourses: React.FC<SemesterCoursesProps> = ({ semesters }) => {
    return (
        <div className="semester-courses">
            {semesters.map((semester, index) => (
                <div key={index}>
                    {semester.skip ? (
                        <h2>{semester.name}(Skipped)</h2>
                    ) : (
                        <h2>
                            <h2>{semester.name}</h2>
                        </h2>
                    )}
                    <table>
                        <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {semester.courses.map((course, courseIndex) => (
                                <tr key={courseIndex}>
                                    <td>{course.code}</td>
                                    <td>{course.name}</td>
                                    <td>{course.credits}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default SemesterCourses;

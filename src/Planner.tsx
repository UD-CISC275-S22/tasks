/* eslint-disable no-extra-parens */
import React from "react";
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
    return (
        <div className="semester-courses">
            {plan.semesters.map((semester, semesterIndex) => (
                <div key={semesterIndex}>
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

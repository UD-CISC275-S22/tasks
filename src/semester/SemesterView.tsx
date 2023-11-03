import React, { useState } from "react";
import { semester } from "../Interface/semester";

export function SemesterView({
    semester,
    clearSemester
}: {
    semester: semester;
    clearSemester: (id: number) => void;
}): JSX.Element {
    const [currentSemester, setSemester] = useState<semester>(semester);
    function clearCourses(semester: semester): void {
        setSemester({ ...semester, classList: [] });
    }
    return (
        <div>
            <div>
                <h3>{currentSemester.season}</h3>
            </div>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Credits</th>
                        <th scope="col">Prerequisites</th>
                        {/*<th scope="col">Schedule</th>
                        <th scope="col">Location</th>
                        <th scope="col">Instructor</th>
    */}
                    </tr>
                </thead>
                <tbody>
                    {currentSemester.classList.map((classItem, classIndex) => {
                        return (
                            <tr key={classIndex}>
                                <td>{classItem.code}</td>
                                <td>{classItem.title}</td>
                                <td>{classItem.credits}</td>
                                <td>
                                    {classItem.preReq.length === 0
                                        ? "None"
                                        : classItem.preReq}
                                </td>
                                {/*<td>
                                    {classItem.schedule.day.join(", ")},{" "}
                                    {classItem.schedule.time}
                                </td>
                                <td>{classItem.location}</td>
                                <td>{classItem.instructor}</td>
                                    */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                {" "}
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                        clearCourses(currentSemester);
                    }}
                >
                    Clear Courses
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                        clearSemester(currentSemester.id);
                    }}
                >
                    Clear Semester
                </button>
            </div>
        </div>
    );
}

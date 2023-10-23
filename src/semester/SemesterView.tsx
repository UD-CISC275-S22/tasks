import React from "react";
import { semester } from "../Interface/semester";
import "./SemesterView.css";

export function SemesterView({
    semester
}: {
    semester: semester;
}): JSX.Element {
    return (
        <div>
            <h1>{semester.season}</h1>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Credits</th>
                        <th scope="col">Prerequisites</th>
                        <th scope="col">Schedule</th>
                        <th scope="col">Location</th>
                        <th scope="col">Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {semester.classList.map((classItem, classIndex) => {
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
                                <td>
                                    {classItem.schedule.day.map(
                                        (dayItem) => dayItem
                                    )}
                                    , {classItem.schedule.time}
                                </td>
                                <td>{classItem.location}</td>
                                <td>{classItem.instructor}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

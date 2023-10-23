import React, { useState } from "react";
import sample from "./data/data.json";
import { classes } from "./Interface/classes";
import { semester } from "./Interface/semester";
import { dateTime } from "./Interface/dateTime";

const semesterExamples = sample.map(
    (sem): semester => ({
        ...sem,
        classList: sem.classList.map(
            (c): classes => ({
                ...c,
                schedule: c.schedule as dateTime
            })
        )
    })
);
export function SemesterTable(): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>(semesterExamples);

    return (
        <div className="semesterTable">
            <h2>Semester Schedule</h2>
            {semesters.map((sem, semIndex) => (
                <div key={semIndex}>
                    <div>
                        <h3>{(semIndex + 1) % 2 === 0 ? "Spring" : "Fall"}</h3>
                    </div>
                    <table className="table table-dark">
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
                            {sem.classList.map((classItem, classIndex) => (
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
                                        {classItem.schedule.day},{" "}
                                        {classItem.schedule.time}
                                    </td>
                                    <td>{classItem.location}</td>
                                    <td>{classItem.instructor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

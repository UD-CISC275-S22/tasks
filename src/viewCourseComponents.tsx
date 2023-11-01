import React from "react";
import { Table } from "react-bootstrap";
import { SemesterI, yearI } from "./interfaces/semester";
import { Course } from "./interfaces/course";
//import React, { useState } from "react";
import "./App.css";
//import { JsxAttribute } from "typescript";
//const [CurrentModalCourse, setCurrentModalCourse] = useState<Course>();

export function Semester({
    rendSemester,
    edit
}: {
    rendSemester: SemesterI;
    edit: (course: Course) => void;
}): JSX.Element {
    return (
        <Table striped bordered hover className="tight">
            <thead>
                <tr>
                    <th>Course ID</th> <th>Name</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
                {rendSemester.courses.map((rendCourse: Course): JSX.Element => {
                    return (
                        <tr
                            onClick={() => {
                                edit(rendCourse);
                            }}
                            key={rendCourse.ticker}
                        >
                            <td>{rendCourse.ticker}</td>
                            <td>{rendCourse.name}</td>
                            <td>{rendCourse.credits}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
export function Year({
    year,
    editCourse
}: {
    year: yearI;
    editCourse: (course: Course) => void;
}): JSX.Element {
    return (
        <div className="d-inline-flex">
            <Table striped bordered hover table-bordered className="tight">
                <thead>
                    <th>{year.firstsemester.season}</th>
                    <th>{year.secondsemester.season}</th>
                </thead>
                <tr>
                    <td>
                        <Semester
                            rendSemester={year.firstsemester}
                            edit={editCourse}
                        ></Semester>
                    </td>
                    <td>
                        <Semester
                            rendSemester={year.secondsemester}
                            edit={editCourse}
                        ></Semester>
                    </td>
                </tr>
            </Table>
        </div>
    );
}

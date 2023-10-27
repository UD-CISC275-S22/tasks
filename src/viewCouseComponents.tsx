import { Table } from "react-bootstrap";
import { SemesterI } from "./interfaces/semester";
import { Course } from "./interfaces/course";
import React from "react";

export function Semester(rendSemester: SemesterI): JSX.Element {
    return (
        <div className="d-inline-flex p-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Course ID</th> <th>Name</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {rendSemester.courses.map(
                        (rendCourse: Course): JSX.Element => {
                            return (
                                <tr
                                    onClick={() => {
                                        alert("You clicked a course");
                                    }}
                                    key={rendCourse.ticker}
                                >
                                    <td>{rendCourse.ticker}</td>
                                    <td>{rendCourse.name}</td>
                                    <td>{rendCourse.credits}</td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </Table>
        </div>
    );
}

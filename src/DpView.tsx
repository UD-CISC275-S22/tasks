//todo: create a universal DpView for all Dp's
/* eslint-disable no-extra-parens */
//this will be the dp table shower
import React from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import { DegreePlan } from "./interfaces/degreeplan";
import { Semester } from "./interfaces/semester";
import { Course } from "./interfaces/course";

export function DpView({
    dp,
    resetView
}: {
    dp: DegreePlan;
    resetView: () => void;
}): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>{dp.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Total Credits: {dp.totalCredits}</h4>
                    </Col>
                    <Col>
                        <h4>Degree Plan ID: {dp.id}</h4>
                    </Col>
                </Row>
                <Row>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                {dp.semestersList.map((semester: Semester) => (
                                    <th key={semester.title}>
                                        <p>{semester.title}</p>
                                        <p>
                                            Total Credits:{" "}
                                            {semester.totalCredits}
                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dp.semestersList.map((semester: Semester) => (
                                <td key={semester.title}>
                                    {semester.courseList.map(
                                        (course: Course) => (
                                            <div key={course.courseCode}>
                                                <p>{course.title}</p>
                                                <Table striped bordered>
                                                    <tbody>
                                                        <td>
                                                            <p>
                                                                Course Credits:{" "}
                                                                {course.credits}
                                                            </p>
                                                            <p>
                                                                Course Code:{" "}
                                                                {
                                                                    course.courseCode
                                                                }
                                                            </p>
                                                            <p
                                                                style={{
                                                                    textAlign:
                                                                        "center"
                                                                }}
                                                            >
                                                                Course
                                                                Description:{" "}
                                                                {
                                                                    course.courseDescription
                                                                }
                                                            </p>
                                                        </td>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        )
                                    )}
                                </td>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
            <Button
                className="esc_button text-align-center"
                variant="danger"
                onClick={resetView}
            >
                Exit
            </Button>
        </div>
    );
}
